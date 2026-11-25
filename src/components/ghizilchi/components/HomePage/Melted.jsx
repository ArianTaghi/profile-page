import MeltedGoldCard from '../Reusable/MeltedGoldCard'
import ProductGrid from '../Reusable/ProductGrid'
import ArticleLinks from '../Article/ArticleLinks'
import { meltedGoldProducts } from './meltedGoldProducts'

export default function Melted() {
  return (
    <section aria-labelledby="melted-heading">
      <h1 id="melted-heading" className="sr-only">موجودی آبشده‌ها</h1>
      <ProductGrid products={meltedGoldProducts} card={MeltedGoldCard} />
      <ArticleLinks slugs={['gold-hallmark', 'gold-assay', 'gold-price']} />
    </section>
  )
}
