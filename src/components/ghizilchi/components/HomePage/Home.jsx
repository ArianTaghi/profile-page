import { Link } from 'react-router-dom'
import heroBracelet from '../../assets/Jewelry/hero-bracelet.webp'
import AboutUs from '../Reusable/AboutUs'
import ProductGrid from '../Reusable/ProductGrid'
import { sampleProducts } from '../Showcase/sampleProducts'

export default function Home() {
  return (
    <>
      <section aria-labelledby="home-heading" className="grid overflow-hidden rounded-(--radius-card) bg-(--color-emerald-950) md:min-h-[390px] md:grid-cols-2">
        <div className="flex flex-col items-start justify-center px-6 py-9 sm:p-12">
          <p className="mb-3 text-sm font-semibold text-(--color-gold-400)">فروشگاه تخصصی طلا</p>
          <h1 id="home-heading" className="mb-4 text-5xl font-extrabold text-(--color-ivory-50) sm:text-7xl">قیزیلچی</h1>
          <p className="mb-7 max-w-sm text-sm leading-8 text-(--color-ivory-200) sm:text-base">
            از دستبندهای ظریف تا گردنبندهای نگین‌دار، مدل‌های طلا را در ویترین قیزیلچی ببینید.
          </p>
          <Link to="/ghizilchi/showcase" className="inline-flex min-h-11 items-center gap-3 rounded-(--radius-control) bg-(--color-gold-400) px-5 py-2 text-sm font-extrabold text-(--color-emerald-950) no-underline transition-colors hover:bg-(--color-gold-200) hover:text-(--color-emerald-950)">
            دیدن ویترین <i className="bi bi-arrow-left" aria-hidden="true" />
          </Link>
        </div>
        <div className="relative min-h-56 sm:min-h-72">
          <img src={heroBracelet} alt="دستبند طلای بافته روی زمینه مخمل سبز" fetchPriority="high" className="absolute inset-0 size-full object-cover" />
        </div>
      </section>

      <section aria-labelledby="featured-heading">
        <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
          <div>
            <h2 id="featured-heading" className="mb-2 text-2xl font-extrabold text-(--color-emerald-950) sm:text-3xl">منتخب ویترین</h2>
            <p className="mb-0 text-sm text-(--color-emerald-700)">محصولات و قیمت‌های نمونه</p>
          </div>
          <Link to="/ghizilchi/showcase" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-(--color-emerald-900) hover:text-(--color-emerald-700)">
            همه محصولات <i className="bi bi-arrow-left" aria-hidden="true" />
          </Link>
        </div>
        <ProductGrid products={sampleProducts.slice(0, 4)} />
      </section>

      <AboutUs />
    </>
  )
}
