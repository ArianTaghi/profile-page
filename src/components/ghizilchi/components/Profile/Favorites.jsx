import { sampleProducts } from '../Showcase/sampleProducts'
import FavouriteListCard from './FavouriteListCard'

const favourites = [sampleProducts[1]]

export default function Favorites() {
  return (
    <ul className="m-0 grid grid-cols-1 list-none gap-3 p-0">
      {favourites.map((product) => (
        <li key={product.id}><FavouriteListCard product={product} /></li>
      ))}
    </ul>
  )
}
