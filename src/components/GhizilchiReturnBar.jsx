import { Link } from 'react-router-dom'

export default function GhizilchiReturnBar() {
  return (
    <nav className="ghizilchi-return-bar" aria-label="بازگشت به سایت پروفایل">
      <div className="ghizilchi-return-bar-inner">
        <span>نمونه‌کار قیزیلچی</span>
        <Link to="/?tab=projects">بازگشت به پروفایل <span aria-hidden="true">←</span></Link>
      </div>
    </nav>
  )
}
