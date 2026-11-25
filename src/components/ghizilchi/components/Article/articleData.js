import coinsCover from './covers/gold-coins.webp?no-inline'
import hallmarkCover from './covers/gold-hallmark.webp?no-inline'
import assayCover from './covers/gold-assay.webp?no-inline'
import savingsCover from './covers/gold-savings.webp?no-inline'
import priceCover from './covers/gold-price.webp?no-inline'
import coinsContent from './content/gold-coins.md?raw'
import hallmarkContent from './content/gold-hallmark.md?raw'
import assayContent from './content/gold-assay.md?raw'
import savingsContent from './content/gold-savings.md?raw'
import priceContent from './content/gold-price.md?raw'

export const articleIndexPath = '/ghizilchi/articles'

export const articleCategories = {
  coins: 'سکه',
  melted: 'طلای آبشده',
  price: 'قیمت و پس‌انداز',
}

export const articles = [
  {
    slug: 'gold-coins',
    title: 'انواع سکه طلا در ایران',
    description: 'تفاوت تمام بهار آزادی طرح قدیم و امامی، نیم‌سکه، ربع‌سکه و پلاک پارسیان را با جدول وزن و عیار ببینید.',
    category: 'coins',
    date: '2026-11-11',
    image: coinsCover,
    imageAlt: 'تصویر مفهومی چند سکهٔ طلایی روی مخمل سبز',
    content: coinsContent,
    related: ['gold-price', 'gold-savings'],
    sources: [
      ['مشخصات سکه‌ها به نقل از سخنگوی مرکز مبادله ایران', 'https://nournews.ir/fa/news/171531/%D8%B3%DA%A9%D9%87-%D9%87%D8%A7%DB%8C-%D8%AD%D8%B1%D8%A7%D8%AC-%D8%B4%D8%AF%D9%87-%D8%A7%D8%B3%D8%AA%D8%A7%D9%86%D8%AF%D8%A7%D8%B1%D8%AF-%D8%A8%D8%A7%D9%86'],
      ['تاریخچهٔ سکه بهار آزادی، شبکه اطلاع‌رسانی طلا و ارز', 'https://www.tgju.org/news/2829/%D8%AA%D8%A7%D8%B1%DB%8C%D8%AE%DA%86%D9%87-%D9%88-%DA%A9%D8%A7%D8%B1%D8%A8%D8%B1%D8%AF-%D8%B3%DA%A9%D9%87-%D8%A8%D9%87%D8%A7%D8%B1-%D8%A2%D8%B2%D8%A7%D8%AF%DB%8C'],
      ['وزن و عیار پلاک پارسیان، ایزی‌ریت', 'https://ezrate.me/news/parsian-coin/fa'],
    ],
  },
  {
    slug: 'gold-hallmark',
    title: 'انگ طلا چیست و چطور استعلام بگیریم؟',
    description: 'شماره انگ طلای آبشده چه کاربردی دارد؟ کد را کجا وارد کنیم و چطور نتیجهٔ استعلام را با برگهٔ ری‌گیری تطبیق دهیم؟',
    category: 'melted',
    date: '2026-11-11',
    image: hallmarkCover,
    imageAlt: 'قطعهٔ طلای آبشده با نشان حک‌شده کنار ذره‌بین',
    content: hallmarkContent,
    related: ['gold-assay', 'gold-price'],
    sources: [
      ['راهنمای استعلام ری‌گیری، دیجیاتو', 'https://digiato.com/iran-technology-news/gold-reygiri'],
      ['سامانهٔ انگ طلا', 'https://reygiri.com/'],
      ['سامانهٔ اتحادیه طلا و جواهر اراک', 'https://arakrey.ir/'],
    ],
  },
  {
    slug: 'gold-assay',
    title: 'ری‌گیری طلا چیست و چگونه انجام می‌شود؟',
    description: 'مراحل تعیین عیار طلای آبشده را از نمونه‌برداری و کوپلاسیون تا ثبت نتیجه و تفاوت آن با XRF بخوانید.',
    category: 'melted',
    date: '2026-11-11',
    image: assayCover,
    imageAlt: 'تصویر مفهومی ظرف آزمایشگاهی داغ و انبر در آزمایشگاه عیارسنجی',
    content: assayContent,
    related: ['gold-hallmark', 'gold-price'],
    sources: [
      ['استاندارد سنجش عیار طلا به روش کوپلاسیون، ISO 11426:2021', 'https://www.iso.org/standard/75771.html'],
      ['پیش‌نمایش استاندارد و اصطلاحات فرایند، سازمان استاندارد خلیج فارس', 'https://gso-sims-preview-doc-aws.s3-eu-west-1.amazonaws.com/gso-iso-11426-2024-en.html'],
      ['مقایسهٔ روش‌های عیارسنجی طلا، مجموعهٔ فنی Fire Assay', 'https://fireassay.eu/wp-content/uploads/2018/11/Assaying_of_gold_jewellery_choice_of_technique.pdf'],
    ],
  },
  {
    slug: 'gold-savings',
    title: 'پس‌انداز طلا چه مزایا و معایبی دارد؟',
    description: 'نقش طلا در حفظ قدرت خرید و تنوع دارایی را کنار نوسان، هزینهٔ نگهداری و اختلاف نرخ خرید و فروش بررسی کنید.',
    category: 'price',
    date: '2026-11-11',
    image: savingsCover,
    imageAlt: 'دو شمش کوچک طلا روی سنگ روشن و پارچهٔ سبز',
    content: savingsContent,
    related: ['gold-coins', 'gold-price'],
    sources: [
      ['جایگاه طلا در ترکیب دارایی، شورای جهانی طلا', 'https://www.gold.org/goldhub/research/relevance-of-gold-as-a-strategic-asset'],
      ['ریسک‌های نگهداری طلا، شورای جهانی طلا', 'https://www.gold.org/goldhub/research/relevance-of-gold-as-a-strategic-asset/risks-challenges'],
      ['هزینه‌ها و فاصلهٔ خرید و فروش فلزات گران‌بها، FINRA', 'https://www.finra.org/investors/insights/physical-precious-metals'],
    ],
  },
  {
    slug: 'gold-price',
    title: 'مظنه طلا چیست و چطور به قیمت گرم تبدیل می‌شود؟',
    description: 'فرمول تبدیل مظنه به نرخ هر گرم طلای ۱۸ عیار و محاسبهٔ ارزش آبشده با عیار واقعی را با مثال یاد بگیرید.',
    category: 'price',
    date: '2026-11-11',
    image: priceCover,
    imageAlt: 'قطعهٔ طلای آبشده در کفهٔ ترازوی طلافروشی',
    content: priceContent,
    related: ['gold-assay', 'gold-coins'],
    sources: [
      ['مظنه، مثقال و فرمول تبدیل به نرخ گرم، طلای شهریور', 'https://talayeshahrivar.ir/blog/what-is-gold-mazanne/'],
      ['تبدیل مظنه و اصلاح عیار طلای آبشده، ایزی‌ریت', 'https://ezrate.me/news/abshodeh-gold-guide/fa'],
    ],
  },
]

export function articlePath(slug) {
  return articleIndexPath + '/' + slug
}

export function findArticle(slug) {
  return articles.find((article) => article.slug === slug)
}

const persianDate = new Intl.DateTimeFormat('fa-IR', {
  dateStyle: 'long',
  timeZone: 'UTC',
})

export function formatArticleDate(date) {
  return persianDate.format(new Date(date))
}

export function articleReadingTime(content) {
  const text = content.replace(/https?:\/\/[^)\s]+/g, '')
  const words = text.match(/[\p{L}\p{N}]+(?:\u200c[\p{L}\p{N}]+)*/gu) ?? []
  return Math.max(1, Math.ceil(words.length / 180)).toLocaleString('fa-IR') + ' دقیقه مطالعه'
}
