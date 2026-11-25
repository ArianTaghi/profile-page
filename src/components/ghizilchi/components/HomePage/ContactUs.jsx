import { Mail, Phone } from 'lucide-react'

const contactMethods = [
  { label: 'ایمیل', value: 'arian.taghi@gmail.com', href: 'mailto:arian.taghi@gmail.com', icon: Mail },
  { label: 'شماره تماس', value: '09149141919', href: 'tel:09149141919', icon: Phone },
]

export default function ContactUs() {
  return (
    <section aria-labelledby="contact-heading" className="mx-auto max-w-3xl">
      <h1 id="contact-heading" className="mb-2 text-2xl font-extrabold text-(--color-emerald-950) sm:text-3xl">تماس با ما</h1>
      <p className="mb-5 text-sm leading-7">برای پرسش دربارهٔ محصولات یا پیگیری سفارش، با قیزیلچی در تماس باشید.</p>

      <address className="m-0 grid gap-3 not-italic sm:grid-cols-2">
        {contactMethods.map(({ label, value, href, icon: Icon }) => (
          <a
            key={href}
            href={href}
            className="flex items-center gap-3 rounded-(--radius-control) border border-solid border-(--color-ivory-300) bg-(--color-ivory-50) p-4 text-(--color-emerald-950) no-underline transition-colors hover:border-(--color-emerald-700) hover:text-(--color-emerald-700) focus-visible:outline-2 focus-visible:outline-(--color-emerald-700)"
          >
            <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-(--color-gold-200)" aria-hidden="true">
              <Icon size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold">{label}</span>
              <bdi dir="ltr" className="mt-1 block text-right text-sm font-semibold [overflow-wrap:anywhere]">{value}</bdi>
            </span>
          </a>
        ))}
      </address>
    </section>
  )
}
