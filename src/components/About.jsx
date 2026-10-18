import profile from '../assets/profile.jpg'

const About = () => (
  <aside className="about-card" dir="rtl">
    <div className="about-photo">
      <img src={profile} alt="تصویر پروفایل" />
    </div>
    <span className="about-eyebrow">Software Engineer</span>
    <h1>آرین طاقی</h1>
    <p className="about-role">توسعه‌دهنده وبسایت و بک‌اند</p>
    <p className="about-education">مهندسی کامپیوتر دانشگاه تبریز</p>
  </aside>
)

export default About
