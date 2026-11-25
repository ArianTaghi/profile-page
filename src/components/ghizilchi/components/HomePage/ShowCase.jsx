import ProductGrid from '../Reusable/ProductGrid'
import ArticleLinks from '../Article/ArticleLinks'
import ShowcaseFilters from './ShowcaseFilters'
import ShowcaseSort from './ShowcaseSort'
import { sampleProducts } from './sampleProducts'

export default function ShowCase() {
  return (
    <section aria-labelledby="showcase-heading">
      <h1 id="showcase-heading" className="sr-only">ویترین طلا</h1>
      <div className="grid items-start gap-5 lg:grid-cols-[12.5rem_minmax(0,1fr)] xl:grid-cols-[14rem_minmax(0,1fr)]">
        <ShowcaseFilters />
        <div className="min-w-0 space-y-3">
          <ShowcaseSort />
          <ProductGrid products={sampleProducts} />
        </div>
      </div>
      <ArticleLinks slugs={['gold-coins', 'gold-savings']} />
    </section>
  )
}
