# پروفایل + نمونه‌کار قیزیلچی

قیزیلچی از کارت «نمونه‌کارها» در همان سایت و زیر مسیر `/ghizilchi/` باز می‌شود. تصویر کارت همان اسکرین‌شات ارسالی است. نوار باریک بالای تمام صفحات قیزیلچی هنگام اسکرول می‌ماند و دکمهٔ «بازگشت به پروفایل» کاربر را به بخش نمونه‌کارها در `/?tab=projects` برمی‌گرداند.

## اجرا

فایل ارسالی فقط `src` داشت؛ به همین دلیل یک `package.json` و تنظیمات حداقلی Vite هم در این نسخه قرار گرفته است. برای اجرای مستقل، از ریشهٔ پوشهٔ استخراج‌شده اجرا کنید:

```bash
npm ci
npm run dev
```

برای خروجی انتشار:

```bash
npm run build
```

محتویات `dist` را روی هاست قرار دهید. نسخهٔ Vite همراه این فایل به Node.js نسخهٔ `20.19+` یا `22.12+` نیاز دارد.

## استفاده در پروژهٔ فعلی

اگر `package.json` و تنظیمات اصلی پروژه را دارید، ابتدا نسخهٔ پشتیبان بگیرید، سپس `src` را با این نسخه جایگزین کنید. `src/components/ghizilchi/main.jsx` قدیمی حذف شده و نباید در پروژهٔ نهایی باقی بماند. فقط `src/main.jsx` ریشهٔ React و `BrowserRouter` را ایجاد می‌کند.

وابستگی‌های لازم را در پروژهٔ فعلی نصب کنید:

```bash
npm install react-router-dom bootstrap bootstrap-icons lucide-react devicon @fontsource-variable/estedad
npm install -D sass tailwindcss@^4 @tailwindcss/postcss@^4 postcss postcss-prefix-selector
```

فایل `postcss.config.js` را هم به ریشهٔ پروژه منتقل کنید. اگر از قبل تنظیمات PostCSS دارید، افزونه‌های همین فایل را با تنظیمات موجود ادغام کنید؛ افزونهٔ Tailwind باید پیش از `prefixSelector` اجرا شود. برای Tailwind از همین مسیر PostCSS استفاده کنید و هم‌زمان افزونهٔ جداگانهٔ `@tailwindcss/vite` را فعال نکنید.

نیازی به جایگزینی `index.html`، `vite.config.js` یا `package.json` اصلی خودتان نیست؛ نسخه‌های همراه، برای اجرای مستقل پوشهٔ ارسالی هستند. `postcss.config.js` و وابستگی‌های بالا برای استایل قیزیلچی لازم‌اند.

## مسیرها

| بخش | مسیر |
| --- | --- |
| پروفایل اصلی | `/` |
| نمونه‌کارها | `/?tab=projects` |
| وبلاگ اصلی | `/weblog` |
| خانهٔ قیزیلچی | `/ghizilchi/` |
| ویترین | `/ghizilchi/showcase` |
| آبشده | `/ghizilchi/melted` |
| سبد خرید | `/ghizilchi/cart` |
| مقالات | `/ghizilchi/articles` |
| مقاله | `/ghizilchi/articles/:slug` |
| سوالات متداول | `/ghizilchi/common-questions` |
| دربارهٔ ما | `/ghizilchi/about` |
| تماس با ما | `/ghizilchi/contact` |
| انتخاب ورود یا ثبت‌نام | `/ghizilchi/auth` |
| ورود | `/ghizilchi/login` |
| ثبت‌نام | `/ghizilchi/signup` |
| پنل کاربری | `/ghizilchi/profile` |
| بخش‌های پنل | `/ghizilchi/profile/edit`، `orders`، `favorites`، `addresses`، `messages` |

## ساختار تغییرات

- `App.jsx` مسیرهای سایت مادر را تعریف می‌کند و قیزیلچی را هنگام ورود به مسیر خودش بارگذاری می‌کند.
- `components/GhizilchiDemo.jsx` نوار برگشت و کل سایت قیزیلچی را در یک کامپوننت قرار می‌دهد.
- `components/GhizilchiReturnBar.jsx` دکمهٔ برگشت را نمایش می‌دهد.
- `components/ghizilchi/App.jsx` فقط مسیرهای داخلی را تعریف می‌کند و دیگر `BrowserRouter` جداگانه ندارد.
- `components/ghizilchi/paths.js` پیشوند لینک‌ها و هدایت‌های قیزیلچی را در یک جا نگه می‌دارد. مسیرهای داخل `Route` نسبی‌اند، ولی لینک‌های داخلی با `ghizilchiPath()` ساخته می‌شوند.
- استایل‌های پروفایل داخل `.portfolio-site` هستند. PostCSS هم تمام انتخابگرهای CSS قیزیلچی، Bootstrap و Tailwind آن را داخل `.ghizilchi-demo` محدود می‌کند تا پس از برگشت، ظاهر پروفایل عوض نشود.
- `Sample.jsx` و `SampleCard.jsx` کارت قابل کلیک پروژه را با تصویر `src/assets/ghizilchi-preview.png` نمایش می‌دهند.

## تنظیم هاست برای مسیرهای مستقیم

هاست باید درخواست مسیرهایی مثل `/ghizilchi/profile/orders` را، وقتی فایل واقعی متناظری ندارند، به `index.html` برگرداند. در غیر این صورت باز کردن مستقیم یا رفرش مسیرهای داخلی خطای 404 می‌دهد.

نمونه برای Nginx:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

نمونه برای Apache در فایل `.htaccess` کنار `index.html` خروجی:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>
```

رفتار فرم‌ها و داده‌های نمایشی قیزیلچی همان نسخهٔ اولیه است؛ این تغییر، آن پروژه را در سایت پروفایل یکپارچه می‌کند.

## بررسی انجام‌شده

بیلد تولید با موفقیت ساخته شد. در مرورگر، کارت نمونه‌کار، نوار برگشت هنگام اسکرول، ۲۲ مسیر مستقیم، لینک‌های داخلی، رفرش مسیر پنل، برگشت فرم ورود و حفظ مسیر وبلاگ بررسی شدند. استایل‌های محاسبه‌شدهٔ پروفایل پیش از ورود و پس از برگشت یکسان بود. صفحات اصلی در عرض‌های ۳۲۰ و ۳۹۰ پیکسل اسکرول افقی نداشتند و خطای جاوااسکریپت یا دریافت ناموفق فایل‌های محلی ثبت نشد. خروجی HTML اختیاری مقالات هم با مسیرهای جدید ساخته شد.
