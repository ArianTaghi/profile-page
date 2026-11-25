import { sampleProducts } from '../Showcase/sampleProducts'
import OrderListCard from './OrderListCard'

const orders = [sampleProducts[0]]

export default function Orders() {
  return (
    <ul className="m-0 grid grid-cols-1 list-none gap-3 p-0">
      {orders.map((product) => (
        <li key={product.id}><OrderListCard product={product} /></li>
      ))}
    </ul>
  )
}
