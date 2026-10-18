import LinkSheet from './LinkSheet.jsx'

const Contact = () => (
  <section className="section-content" dir="rtl">
    <span className="section-eyebrow">ارتباط</span>
    <h2>ارتباط با من</h2>
    <div className="contact-list">
      <a href="mailto:arian.taghi@gmail.com"><span>ایمیل</span><strong>arian.taghi@gmail.com</strong></a>
      <a href="https://github.com/ArianTaghi" target="_blank" rel="noopener noreferrer"><span>گیت‌هاب</span><strong>ArianTaghi</strong></a>
      <a href="https://www.linkedin.com/in/arian-taghi-968a74420/" target="_blank" rel="noopener noreferrer"><span>لینکدین</span><strong>Arian Taghi</strong></a>
    </div>
    <div className="social-links">
      <LinkSheet link="https://github.com/ArianTaghi" name="github" label="GitHub" />
      <LinkSheet link="https://www.linkedin.com/in/arian-taghi-968a74420/" name="linkedin" label="LinkedIn" />
      <LinkSheet link="mailto:arian.taghi@gmail.com" name="google" label="Email" />
    </div>
  </section>
)

export default Contact
