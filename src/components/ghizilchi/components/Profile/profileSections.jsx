import { Activity, Heart, MapPin, MessageSquare, Pencil, ShoppingBag } from 'lucide-react'
import EditInfo from './EditInfo'
import Orders from './Orders'
import Favorites from './Favorites'
import Addresses from './Addresses'
import Messages from './Messages'
import ActivityOverview from './ActivityOverview'

const profileSections = [
  { path: 'edit', label: 'ویرایش', icon: Pencil, component: EditInfo },
  { path: 'orders', label: 'سفارش‌ها', icon: ShoppingBag, component: Orders },
  { path: 'favorites', label: 'علاقه‌مندی‌ها', icon: Heart, component: Favorites },
  { path: 'addresses', label: 'آدرس‌ها', icon: MapPin, component: Addresses },
  { path: 'messages', label: 'پیام‌ها', icon: MessageSquare, component: Messages },
  { path: '', label: 'خلاصه فعالیت', icon: Activity, component: ActivityOverview },
]

export default profileSections