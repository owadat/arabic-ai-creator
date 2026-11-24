# Arabic AI Creator

أداة مجانية مفتوحة المصدر لمساعدة صناع المحتوى العربي على كتابة برومبتات منظمة للصور والفيديو والقصص الكرتونية.

## الاستخدام
1. افتح `index.html` في المتصفح، أو انشر الملفات بواسطة GitHub Pages.
2. اكتب وصف المشهد واختر النوع والأسلوب والإضاءة والأبعاد.
3. للفيديو، اختر المدة وأضف وصف الصوت إذا أردت.
4. أنشئ البرومبت، ثم عدّله أو انسخه إلى أداة توليد الوسائط التي تفضلها، أو احفظه بصيغة TXT.

الأداة تعتمد على قوالب محلية ولا تستدعي نموذج ذكاء اصطناعي ولا تنشئ صورًا أو فيديوهات بنفسها. لا تحتاج حسابًا أو مفتاح API. اختيار الإنجليزية يغير لغة القالب ولا يترجم النص الذي تدخله. لا تخزن الأداة مدخلاتك ولا ترسلها إلى خادم.

## English
A lightweight, Arabic-first prompt builder for image, video and animated story workflows. It runs in a browser without dependencies, accounts or API keys. English templates are available; user input is kept as written. This is an early-stage project, not a media generator.

## Development / التطوير
- `index.html`: واجهة المستخدم / UI
- `style.css`: التصميم / styles
- `prompts.js`: منطق القوالب / prompt engine
- `app.js`: التفاعل / browser interactions
- `test.js`: اختبارات المنطق / logic tests

Run `node test.js` using Node.js 18 or newer. No installation of packages is required.

## Roadmap / خطة التطوير
- قوالب إضافية للمحتوى التعليمي والتسويقي.
- بناء عدة مشاهد مترابطة مع الحفاظ على أوصاف الشخصيات.
- تصدير المشاريع بصيغة JSON وإمكانية استيرادها.
- اختبارات إضافية وملاحظات من المستخدمين.

## Contributing / المساهمة
افتح Issue لوصف مشكلة أو اقتراح تحسين. يمكنك عمل Fork ثم Pull Request مع شرح التعديل وطريقة اختباره. لا ترفع مفاتيح API أو بيانات شخصية. Please keep contributions focused and include tests for changes to the prompt engine.

License: MIT.
