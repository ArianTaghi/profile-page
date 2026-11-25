export default function AboutUs({ standalone = false }) {
  const Heading = standalone ? 'h1' : 'h2'

  return (
    <section aria-labelledby="about-heading" className="grid gap-6 rounded-(--radius-card) border-[1px] border-solid border-(--color-ivory-200) bg-(--color-ivory-50) p-6 sm:grid-cols-[1fr_2fr] sm:gap-10 sm:p-10">
      <div>
        <span className="mb-4 inline-grid size-11 place-items-center rounded-(--radius-control) bg-(--color-gold-200) text-(--color-emerald-900)" aria-hidden="true">
          <i className="bi bi-gem" />
        </span>
        <Heading id="about-heading" className="m-0 text-2xl font-extrabold text-(--color-emerald-950) sm:text-3xl">درباره قیزیلچی</Heading>
      </div>
      <div className="space-y-2 text-sm leading-8 sm:text-base [&>p]:mb-0">
        <p>قیزیلچی یک سایت تخصصی برای عرضه طلا و طلای آب‌شده است.</p>
        <p>در ویترین می‌توانید مدل‌های زیورآلات را ببینید و قیمت‌ها را به تومان مقایسه کنید.</p>
        <p>سامانه حسابداری قیزیلچی برای ثبت معاملات و مدیریت حساب‌های طلافروشی طراحی شده است.</p>
        <p>در این سامانه می‌توان معاملات طلای دست‌دوم، شکسته و فردایی را هم ثبت و پیگیری کرد.</p>
        <p>حساب معاملات سکه و ارز نیز در کنار حساب طلا قابل مدیریت است.</p>
        <p>هدف ما این است که مشاهده محصولات و پیگیری حساب‌های طلا ساده‌تر باشد.</p>
      </div>
    </section>
  )
}
