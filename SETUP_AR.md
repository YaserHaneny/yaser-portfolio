# دليل الإعداد - Portfolio Yaser

## 🚀 البدء السريع

### 1. تحديث اسم المستخدم في GitHub

افتح الملف `app/components/Projects.tsx` وابحث عن السطر 25:

```typescript
const username = "YOUR_GITHUB_USERNAME";
```

استبدل `YOUR_GITHUB_USERNAME` باسم المستخدم الحقيقي في GitHub.

### 2. تحديث المعلومات الشخصية

#### Hero Section (القسم الرئيسي)
- افتح `app/components/Hero.tsx`
- غيّر النص "Hi, I'm Yaser" إلى اسمك
- غيّر "Full Stack Developer" إلى تخصصك
- غيّر الوصف حسب رغبتك

#### About Section (قسم من أنا)
- افتح `app/components/About.tsx`
- غيّر النصوص في قسم "About Me" بمعلوماتك الشخصية

#### Contact Section (قسم التواصل)
- افتح `app/components/Contact.tsx`
- غيّر البريد الإلكتروني في السطر 132
- غيّر روابط التواصل الاجتماعي (GitHub, LinkedIn, Twitter)

### 3. تحديث المهارات

افتح `app/components/Skills.tsx` وعدّل:
- أسماء المهارات في كل فئة
- أضف أو احذف فئات حسب رغبتك

### 4. المشاريع من GitHub

المشاريع تُجلب تلقائياً من GitHub! فقط:
1. تأكد من تحديث اسم المستخدم (الخطوة 1)
2. تأكد من أن مشاريعك في GitHub:
   - لديها وصف (description)
   - ليست Forks (مشاريع منسوخة)
   - لديها topics (اختياري لكن مفيد)

### 5. إضافة مشاريع يدوياً (اختياري)

إذا أردت إضافة مشاريع يدوياً، عدّل ملف `data/projects.json`:

```json
{
  "id": 1,
  "title": "اسم المشروع",
  "description": "وصف المشروع",
  "techStack": ["React", "Next.js"],
  "githubLink": "https://github.com/username/project",
  "liveDemoLink": "https://demo-link.com", // اختياري
  "screenshot": "/project-image.jpg"
}
```

## 🎨 التخصيص

### تغيير الألوان

الألوان الحالية:
- الأزرق: `blue-600`
- البنفسجي: `purple-600`
- الأزرق الداكن: `indigo-600`

يمكنك تغييرها في أي component عن طريق تعديل classes مثل:
- `from-blue-600` → `from-green-600`
- `to-purple-600` → `to-pink-600`

### إضافة صور للمشاريع

1. ضع الصور في مجلد `public/`
2. أضف المسار في `projects.json` أو في GitHub repository description

## 🚀 التشغيل

```bash
# تثبيت المكتبات
npm install

# تشغيل السيرفر المحلي
npm run dev

# بناء المشروع للإنتاج
npm run build
```

## 📦 النشر

### Vercel (موصى به)

1. ارفع المشروع على GitHub
2. اذهب إلى [vercel.com](https://vercel.com)
3. سجّل دخول بحساب GitHub
4. اضغط "New Project"
5. اختر المشروع
6. اضغط "Deploy"

### Netlify

1. ارفع المشروع على GitHub
2. اذهب إلى [netlify.com](https://netlify.com)
3. اضغط "New site from Git"
4. اختر المشروع
5. اضغط "Deploy site"

## ⚙️ الإعدادات المتقدمة

### زيادة عدد المشاريع المعروضة

في `app/api/github-projects/route.ts`، غيّر:
```typescript
per_page=10  // غيّر 10 إلى العدد المطلوب
```

### تصفية المشاريع

في `app/components/Projects.tsx`، يمكنك إضافة filters:

```typescript
const filteredProjects = projects.filter(project => 
  project.stars > 5 // فقط المشاريع التي لديها أكثر من 5 stars
);
```

## 🐛 حل المشاكل

### المشاريع لا تظهر

1. تأكد من تحديث اسم المستخدم في GitHub
2. تأكد من أن المشاريع لديها وصف
3. تحقق من console في المتصفح للأخطاء
4. راجع `data/projects.json` كبديل

### الأخطاء في البناء

```bash
# احذف node_modules و package-lock.json
rm -rf node_modules package-lock.json

# أعد التثبيت
npm install
```

## 📝 ملاحظات

- المشاريع تُجلب من GitHub API تلقائياً
- إذا فشل جلب المشاريع، سيتم استخدام `data/projects.json`
- يمكنك دمج الاثنين: GitHub + JSON يدوي

## 🎯 الخطوات التالية

1. ✅ تحديث اسم المستخدم في GitHub
2. ✅ تحديث المعلومات الشخصية
3. ✅ تحديث المهارات
4. ✅ إضافة صور للمشاريع (اختياري)
5. ✅ نشر الموقع

---

**حظاً موفقاً! 🚀**

