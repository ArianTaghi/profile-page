import AddressListCard from './AddressListCard'

const addresses = [
  { id: 1, title: 'خانه', street: 'تبریز، خیابان نمونه، کوچهٔ بهار، پلاک ۱۲، واحد ۳' },
]

export default function Addresses() {
  return (
    <ul className="m-0 grid grid-cols-1 list-none gap-3 p-0">
      {addresses.map((address) => (
        <li key={address.id}><AddressListCard address={address} /></li>
      ))}
    </ul>
  )
}
