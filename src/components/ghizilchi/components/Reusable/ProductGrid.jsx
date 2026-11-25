import ProductCard from './ProductCard'

export default function ProductGrid({ products, card: Card = ProductCard }) {
  return (
    <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 min-[360px]:grid-cols-2 sm:gap-5 lg:grid-cols-4">
      {products.map((product) => (
        <li key={product.id}><Card product={product} /></li>
      ))}
    </ul>
  )
}
