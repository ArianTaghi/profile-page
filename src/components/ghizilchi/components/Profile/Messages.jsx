import MessageListCard from './MessageListCard'

const messages = [
  {
    id: 1,
    title: 'به قیزیلچی خوش اومدی',
    body: 'خوشحالیم که به جمع قیزیلچی پیوستی. می‌تونی مدل‌های طلا رو توی ویترین ببینی و محصولات دلخواهت رو در علاقه‌مندی‌ها نگه داری تا بعداً راحت پیداشون کنی. اگه می‌خوای دربارهٔ وزن، عیار و روش مقایسهٔ قیمت‌ها بیشتر بدونی، راهنماهای بخش مقالات رو بخون. برای پرسش‌های مربوط به خرید هم می‌تونی به صفحهٔ سوالات متداول سر بزنی.',
  },
]

export default function Messages() {
  return (
    <ul className="m-0 grid grid-cols-1 list-none gap-3 p-0">
      {messages.map((message) => (
        <li key={message.id}><MessageListCard message={message} /></li>
      ))}
    </ul>
  )
}
