import SampleCard from './SampleCard.jsx'
import ghizilchiPreview from '../assets/ghizilchi-preview.png'

const Sample = () => (
  <section className="section-content" dir="rtl">
    <span className="section-eyebrow">نمونه‌کارها</span>
    <h2>پروژه‌های من</h2>
    <div className="samples-grid">
      <SampleCard
        title="قیزیلچی"
        description="رابط کاربری فروشگاه طلا و جواهر؛ با ویترین محصولات، مقالات و پنل کاربری."
        preview={ghizilchiPreview}
        to="/ghizilchi/"
        technologies={['React', 'Tailwind CSS']}
      />
    </div>
  </section>
)

export default Sample
