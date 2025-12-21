# Projects Data

## كيفية تحديث المشاريع

قم بتعديل ملف `projects.json` لإضافة أو تحديث مشاريعك.

### هيكل المشروع:

```json
{
  "id": 1,
  "title": "اسم المشروع",
  "description": "وصف المشروع بالتفصيل",
  "techStack": ["React", "Next.js", "TypeScript"],
  "githubLink": "https://github.com/username/project-name",
  "liveDemoLink": "https://project-demo.vercel.app", // اختياري
  "screenshot": "/project-image.jpg"
}
```

### ملاحظات:

- `liveDemoLink` اختياري - إذا لم يكن لديك رابط حي، يمكنك حذف الحقل
- `screenshot`: ضع الصور في مجلد `public` وأضف المسار هنا (مثل: `/project-1.jpg`)
- `techStack`: أضف جميع التقنيات المستخدمة في المشروع
- يمكنك إضافة أو حذف مشاريع حسب رغبتك

