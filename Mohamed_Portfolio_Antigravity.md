# Mohamed Elbasyouni — Portfolio Build Mission

## Google Antigravity R.A.P.S. Framework

---

## HOW TO USE THIS IN ANTIGRAVITY

1. Open Antigravity and create a new workspace folder: `Mohamed-Portfolio/`
2. Drop this file and `pic_a___86_.jpg` into the workspace root.
3. Open **Manager View** (top-right toggle).
4. Paste the RULES section into your **Rules file** (`RULES.md`).
5. Dispatch the 5 Agent Missions below in **parallel** using "New Agent" for each.
6. Review each agent's **Artifact** (task list + implementation plan) before approving execution.
7. Run the Integration Agent last to wire everything together.
8. Use Antigravity's built-in browser to **verify the live result** using the QA checklist.

---

# ═══════════════════════════════════════

# STEP 1 — RULES.md (paste into Rules file)

# ═══════════════════════════════════════

```
# PORTFOLIO BUILD RULES — Mohamed Elbasyouni

## Project Identity
- Owner: Mohamed Mostafa Elbasyouni
- Type: Personal portfolio website — Data Analyst / AI Engineer
- Stack: Pure HTML5 + CSS3 + Vanilla JS — NO frameworks, NO libraries, NO build tools
- Single-file output: All agents write modular files; Integration Agent merges to `index.html`
- Photo asset: `pic_a___86_.jpg` — must be in same directory as index.html

## Agent Behaviour Rules
- Every agent produces an Artifact (implementation plan) BEFORE writing any code
- No agent writes code outside its assigned section IDs
- No agent uses: React, Vue, Angular, Bootstrap, Tailwind, jQuery, or any npm packages
- Google Fonts is the ONLY external resource allowed (via <link> tag)
- Every text element must have data-en="..." and data-ar="..." attributes
- Zero placeholder text — all content is real and complete as specified in the Brief
- All colors must use CSS variables defined in the Design Tokens file (design-tokens.css)
- All CSS written by agents must be scoped to section IDs to prevent conflicts
- Agents do NOT modify sections owned by other agents

## Design System (non-negotiable)
- Background: #0D1117
- Surface: #161B22
- Elevated surface: #1C2128
- Primary accent: #00C9A7 (teal)
- Secondary accent: #3B82F6 (blue)
- Muted text: #8B949E
- Body text: #C9D1D9
- Headings: #F0F6FC
- Border: rgba(48,54,61,0.8)
- Display font (Space Mono): hero name, section labels, skill tags, terminal cards
- Body font (DM Sans): all body copy, buttons, nav, forms
- Arabic font (Cairo): all Arabic text, activated when dir="rtl"

## Bilingual System
- Language toggle switches lang, dir, and fontFamily simultaneously
- querySelectorAll('[data-en]') loop updates all text on toggle
- localStorage key "lang" persists preference across sessions
- Typewriter cycles in both languages based on active language

## Accessibility
- prefers-reduced-motion: skip all animations if true
- All images: meaningful alt text
- All form inputs: paired <label> elements
- Icon-only buttons: aria-label attribute
- First focusable element: skip-to-content link
- Color contrast: WCAG AA minimum

## Quality Gates (each agent self-checks before done)
- [ ] No placeholder text in my section
- [ ] All data-en and data-ar attributes populated
- [ ] CSS scoped to my section IDs only
- [ ] Mobile-first: tested at 375px conceptually
- [ ] Animations check prefers-reduced-motion
- [ ] Section linked correctly in nav
```

---

# ═══════════════════════════════════════

# STEP 2 — PROJECT FILE STRUCTURE

# (Integration Agent creates this skeleton first)

# ═══════════════════════════════════════

```
Mohamed-Portfolio/
├── index.html              ← Integration Agent assembles this last
├── pic_a___86_.jpg         ← Owner's profile photo (already in workspace)
├── sections/
│   ├── nav.html            ← Agent 1 output
│   ├── hero.html           ← Agent 1 output
│   ├── about.html          ← Agent 2 output
│   ├── skills.html         ← Agent 2 output
│   ├── projects.html       ← Agent 3 output
│   ├── experience.html     ← Agent 4 output
│   ├── education.html      ← Agent 4 output
│   └── contact.html        ← Agent 5 output
├── css/
│   ├── design-tokens.css   ← Integration Agent creates first
│   ├── nav-hero.css        ← Agent 1 output
│   ├── about-skills.css    ← Agent 2 output
│   ├── projects.css        ← Agent 3 output
│   ├── experience-edu.css  ← Agent 4 output
│   └── contact-footer.css  ← Agent 5 output
└── js/
    ├── core.js             ← Integration Agent creates first
    ├── hero-fx.js          ← Agent 1 output
    ├── skills-fx.js        ← Agent 2 output
    ├── projects-fx.js      ← Agent 3 output
    └── bilingual.js        ← Integration Agent creates first
```

---

# ═══════════════════════════════════════

# STEP 3 — INTEGRATION AGENT (run FIRST)

# ═══════════════════════════════════════

**Agent Name:** `Integration Setup`
**Run:** Before all other agents
**This agent does NOT build sections — it creates the shared foundation**

## Mission

Create the project skeleton that all other agents will write into.

## Artifact to produce first

```
Task List:
1. Create /css/design-tokens.css with all CSS variables
2. Create /js/core.js with IntersectionObserver, bilingual toggle, scroll utilities
3. Create /js/bilingual.js with full EN/AR switching system
4. Create index.html shell (head + empty section placeholders + footer)
5. Create /sections/ folder with empty placeholder files
```

## design-tokens.css (complete — write exactly this)

```css
:root {
  --bg-base: #0D1117;
  --bg-surface: #161B22;
  --bg-elevated: #1C2128;
  --accent-teal: #00C9A7;
  --accent-blue: #3B82F6;
  --accent-green: #56D364;
  --text-head: #F0F6FC;
  --text-body: #C9D1D9;
  --text-muted: #8B949E;
  --border: rgba(48,54,61,0.8);
  --font-display: 'Space Mono', monospace;
  --font-body: 'DM Sans', sans-serif;
  --font-arabic: 'Cairo', sans-serif;
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --transition: 0.3s ease;
  --container: 1200px;
  --section-gap: 100px;
}

@media (max-width: 768px) {
  :root { --section-gap: 60px; }
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg-base);
  color: var(--text-body);
  font-family: var(--font-body);
  line-height: 1.7;
}

[dir="rtl"] body { font-family: var(--font-arabic); }

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 24px;
}

section { padding: var(--section-gap) 0; }

.section-label {
  font-family: var(--font-display);
  font-size: 13px;
  color: var(--accent-teal);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.animate-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-up.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .animate-up { opacity: 1; transform: none; transition: none; }
}
```

## core.js (complete)

```javascript
// IntersectionObserver — animate elements on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i * 0.08) + 's';
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.animate-up').forEach(el => observer.observe(el));

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});

// Stats counter animation
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    el.textContent = Math.floor(start).toLocaleString();
    if (start >= target) { el.textContent = target.toLocaleString(); clearInterval(timer); }
  }, 16);
}
```

## bilingual.js (complete)

```javascript
const TRANSLATIONS = {
  en: { dir: 'ltr', font: "'DM Sans', sans-serif", toggle: 'عربي' },
  ar: { dir: 'rtl', font: "'Cairo', sans-serif", toggle: 'English' }
};

function applyLanguage(lang) {
  const config = TRANSLATIONS[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = config.dir;
  document.body.style.fontFamily = config.font;
  document.querySelectorAll('[data-' + lang + ']').forEach(el => {
    el.textContent = el.getAttribute('data-' + lang);
  });
  document.querySelectorAll('[data-ph-' + lang + ']').forEach(el => {
    el.placeholder = el.getAttribute('data-ph-' + lang);
  });
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = config.toggle;
  localStorage.setItem('lang', lang);
  // Notify typewriter if active
  if (window.typewriterSetLang) window.typewriterSetLang(lang);
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'en';
  applyLanguage(saved);
  document.getElementById('lang-toggle')?.addEventListener('click', () => {
    applyLanguage(document.documentElement.lang === 'en' ? 'ar' : 'en');
  });
});
```

## index.html shell (create this — other agents fill the sections)

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mohamed Elbasyouni | Data Analyst & AI Engineer</title>
  <meta name="description" content="Portfolio of Mohamed Elbasyouni — Data Analyst, BI Developer, and Machine Learning practitioner. Open to opportunities in Egypt, UAE, and Remote.">
  <meta property="og:title" content="Mohamed Elbasyouni | Data Analyst & AI Engineer">
  <meta property="og:description" content="Results-driven Data Analyst specializing in Python, SQL, Power BI, and Machine Learning.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=DM+Sans:wght@400;500;600&family=Cairo:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/design-tokens.css">
  <link rel="stylesheet" href="css/nav-hero.css">
  <link rel="stylesheet" href="css/about-skills.css">
  <link rel="stylesheet" href="css/projects.css">
  <link rel="stylesheet" href="css/experience-edu.css">
  <link rel="stylesheet" href="css/contact-footer.css">
</head>
<body>
  <a href="#main" class="skip-link" style="position:absolute;left:-999px;">Skip to content</a>
  <!-- NAV — Agent 1 fills this -->
  <nav id="navbar"></nav>
  <main id="main">
    <!-- HERO — Agent 1 fills this -->
    <section id="hero"></section>
    <!-- ABOUT — Agent 2 fills this -->
    <section id="about"></section>
    <!-- SKILLS — Agent 2 fills this -->
    <section id="skills"></section>
    <!-- PROJECTS — Agent 3 fills this -->
    <section id="projects"></section>
    <!-- EXPERIENCE — Agent 4 fills this -->
    <section id="experience"></section>
    <!-- EDUCATION — Agent 4 fills this -->
    <section id="education"></section>
    <!-- CONTACT — Agent 5 fills this -->
    <section id="contact"></section>
  </main>
  <footer id="site-footer"></footer>
  <script src="js/bilingual.js"></script>
  <script src="js/core.js"></script>
  <script src="js/hero-fx.js"></script>
  <script src="js/skills-fx.js"></script>
  <script src="js/projects-fx.js"></script>
</body>
</html>
```

---

# ═══════════════════════════════════════

# PARALLEL AGENT MISSIONS

# Dispatch all 5 simultaneously in Manager View

# ═══════════════════════════════════════

---

## AGENT 1 — "NavHero Builder"

**Owns:** `#navbar`, `#hero`, `nav-hero.css`, `hero-fx.js`
**Depends on:** Integration Agent complete

### Mission Brief

Build the fixed navigation bar and the full-viewport hero section for Mohamed Elbasyouni's
portfolio. Both sections must follow the design tokens in design-tokens.css exactly.

### Produce this Artifact first (before any code):

```
Implementation Plan — NavHero Builder

NAV:
- Fixed position, backdrop-filter blur(12px), rgba(13,17,23,0.85) bg
- Left: logo — monospace </> + "Mohamed." text
- Center: 6 nav links with smooth scroll (About, Skills, Projects, Experience, Education, Contact)
- Right: lang-toggle button + Download CV button
- Mobile: hamburger (☰ → ✕ animated) with full-screen overlay at <768px
- All links have data-en / data-ar attributes

HERO:
- min-height: 100vh, two-column grid (60/40) on desktop, stacked on mobile
- Left: greeting line → H1 name → typewriter roles → bio paragraph → CTA buttons → social icons → stats bar
- Right: circular photo with rotating gradient border + status badge
- Canvas particle animation (50 dots, teal, slow drift, connected by lines when close)
- Typewriter: cycles through 4 roles in active language, types char-by-char, deletes, loops
- Stats: 1330 hours, 4+ projects, 2 certifications — count-up animation on scroll

CONTENT (use exactly):
- Greeting EN: "> Hello, World! I'm" | AR: "> مرحباً، أنا"
- Name EN: "Mohamed Elbasyouni" | AR: "محمد مصطفى الباسيوني"
- Roles EN: ["Data Analyst","BI Developer","ML Engineer","AI Enthusiast"]
- Roles AR: ["محلل بيانات","مطور ذكاء أعمال","مهندس تعلم آلة","متحمس للذكاء الاصطناعي"]
- Bio EN: "Results-driven analyst bridging business intelligence and machine learning.
  Currently completing a 1,330-hour intensive AI & Data Analytics diploma at the Egyptian
  Military Academy. Certified by Google and Microsoft. Building data pipelines that tell stories."
- Bio AR: "محلل بيانات يجمع بين ذكاء الأعمال وتعلم الآلة. أتمم حالياً دبلوماً متخصصاً
  في الذكاء الاصطناعي وتحليل البيانات بمجموع 1,330 ساعة في الأكاديمية العسكرية المصرية.
  حاصل على شهادات من Google وMicrosoft. أبني مسارات بيانات تحكي قصصاً."
- CTA1: "View My Work" / "اعرض أعمالي" → #projects
- CTA2: "Let's Connect" / "تواصل معي" → #contact
- LinkedIn: https://linkedin.com/in/mohamed-moustafa-elbasyouni-383650211
- GitHub: https://github.com/markegyptian55-cloud
- Portfolio: https://markegyptian55-cloud.github.io/Portfolio/
- Photo src: "pic_a___86_.jpg"
- Status badge EN: "Open to Work" | AR: "متاح للعمل"
- Download CV: href="#" download (placeholder — owner replaces with actual PDF path)
```

### hero-fx.js — Implement these functions:

1. `initCanvas()` — particle animation on #hero-canvas
2. `initTypewriter(roles_en, roles_ar)` — typewriter with language awareness;
   export `window.typewriterSetLang(lang)` for bilingual.js to call on toggle
3. `initStatsCounter()` — IntersectionObserver triggers count-up on .stat-number elements
4. `initHamburger()` — mobile nav toggle

### Self-check before marking done:

- [ ] Canvas animation runs without blocking scroll
- [ ] Typewriter switches language when lang-toggle is clicked
- [ ] Photo circle visible with rotating gradient ring
- [ ] Hamburger nav works on 375px viewport
- [ ] Download CV button present in nav

---

## AGENT 2 — "AboutSkills Builder"

**Owns:** `#about`, `#skills`, `about-skills.css`, `skills-fx.js`
**Depends on:** Integration Agent complete

### Mission Brief

Build the About Me section (with terminal card) and the Skills & Tools section (with animated
proficiency bars) for Mohamed's portfolio.

### Produce this Artifact first:

```
Implementation Plan — AboutSkills Builder

ABOUT (#about):
- Section label "01. ABOUT_ME" / "01. عني"
- Two columns on desktop: left = bio text, right = terminal card
- Bio headline EN: "Turning Raw Data Into Real Decisions"
          AR: "تحويل البيانات الخام إلى قرارات حقيقية"
- Bio paragraph EN: "I'm a Junior Data Analyst from Egypt with a unique background — I
  transitioned from three years in hospitality finance (Accountant at Aurora Oriental
  Resort, Sharm El-Sheikh) into data science, driven by a passion for patterns and
  evidence-based thinking. My accounting foundation gives me a sharper commercial lens:
  I don't just build models — I understand their business consequences. I'm currently
  deep inside a 36-week, full-time, military-structured diploma program at the Egyptian
  Military Academy, covering everything from statistics and SQL to deep learning and
  Azure deployment. When I'm not coding, I'm thinking in chess moves."
  AR: "أنا محلل بيانات مبتدئ من مصر بخلفية فريدة — انتقلت من ثلاث سنوات في المحاسبة
  المالية في منتجع أورورا أوريانتال إلى عالم علم البيانات. خلفيتي المحاسبية تمنحني نظرة
  تجارية أعمق: لا أبني النماذج فحسب، بل أفهم تداعياتها التجارية. أكمل حالياً برنامج
  دبلوم مكثف مدته 36 أسبوعاً بنظام عسكري في الأكاديمية العسكرية المصرية. حين لا أكتب
  كوداً، أفكر في حركات الشطرنج."
- Terminal card: dark surface (#161B22), monospace font, teal > prompts, display:
  $ whoami → Mohamed Mostafa Elbasyouni
  $ location → El Mansoura, Egypt
  $ languages → Arabic (Native), English (B2), German (A2)
  $ certifications → Google Data Analytics ✓ | Microsoft PL-300 ✓
  $ status → Open to: Full-time | Freelance | Remote | Egypt | UAE
  Blinking cursor: ▋ animated with CSS opacity keyframes

SKILLS (#skills):
- Section label "02. SKILLS_TOOLS" / "02. المهارات والأدوات"
- 4 category cards in grid (4→2→1 col responsive)
- Category 1 (Programming): Python, NumPy, Pandas, SQL with bar: Python 85%, SQL 75%
- Category 2 (BI/Viz): Power BI, DAX, Tableau, Excel, Orange with bar: PowerBI 80%, Excel 85%
- Category 3 (ML): Linear/Logistic Regression, KNN, K-Means, Decision Trees, XGBoost, SHAP
  with bar: Scikit-learn 75%, ML Concepts 70%
- Category 4 (Cloud/Core): Azure, EDA, Data Cleaning, Git, GitHub
  with bar: Azure 55%, EDA 85%
- Tools icon row below: Python🐍 PowerBI📊 Tableau📈 Excel📋 SQL🗄️ Jupyter📓 VSCode💻 GitHub🐙 Azure☁️
```

### skills-fx.js — Implement:

1. `initSkillBars()` — IntersectionObserver; animate bar width from 0 to data-width on first view
2. Bars use CSS transition: `width 1.2s ease-out`; data attribute: `data-width="85%"`

### Self-check:

- [ ] Terminal card has blinking cursor
- [ ] All 4 skill categories present with correct skills listed
- [ ] Proficiency bars animate on scroll (test by scrolling to #skills)
- [ ] No skills data is missing or placeholder

---

## AGENT 3 — "Projects Builder"

**Owns:** `#projects`, `projects.css`, `projects-fx.js`
**Depends on:** Integration Agent complete

### Mission Brief

Build the Projects section with 4 project cards, filter tabs, and hover animations.

### Produce this Artifact first:

```
Implementation Plan — Projects Builder

STRUCTURE:
- Section label "03. PROJECTS" / "03. المشاريع"
- Headline EN: "What I've Built" | AR: "ما قمت ببنائه"
- Filter tabs: All | Machine Learning | BI & Dashboards | Data Mining | Capstone
- 3-col grid → 2 on tablet → 1 on mobile
- Cards filter by data-category attribute (JS toggle show/hide)

PROJECT CARD SPECS:
Build exactly 4 cards. Each has: badge, title, tech tags (chips), category, description,
bullet highlights (3), and link buttons.

CARD 1 — Body Performance Analytics (FEATURED)
- Teal glow border: box-shadow: 0 0 0 1px var(--accent-teal), 0 0 24px rgba(0,201,167,0.12)
- Badge: 🏆 Featured Project
- Title EN: "Body Performance Analytics — End-to-End ML System"
  Title AR: "تحليل الأداء الجسدي — نظام تعلم آلة متكامل"
- Category: machine-learning
- Tags: Python, Scikit-learn, XGBoost, SHAP, Power BI, GitHub
- Desc EN: "Complete ML pipeline on 13,393 records for 4-class fitness classification.
  8+ algorithms compared — XGBoost emerged champion at ~90% accuracy. Includes SHAP
  explainability analysis and an interactive Power BI dashboard for non-technical
  stakeholders. Pipeline: data collection → cleaning → EDA → feature engineering →
  modeling → evaluation → visualization."
  Desc AR: "مسار تعلم آلة كامل على 13,393 سجلاً لتصنيف اللياقة البدنية في 4 فئات.
  مقارنة 8+ خوارزميات — تفوق XGBoost بدقة ~90%. يشمل تحليل SHAP ولوحة Power BI تفاعلية."
- Bullets: ✓ 90% accuracy with XGBoost | ✓ SHAP explainability | ✓ Full pipeline: data → insights
- Links: [GitHub →] [Live Dashboard →] — both href="#" with comment: replace with real URLs

CARD 2 — EDA & BI Dashboards
- Category: bi-dashboards
- Tags: Python, Power BI, Tableau, Excel, Pandas, NumPy
- Title EN: "EDA & Business Intelligence Dashboards"
  Title AR: "التحليل الاستكشافي ولوحات ذكاء الأعمال"
- Desc EN: "Suite of interactive dashboards with filters, slicers, and drill-throughs across
  Power BI, Tableau, and Excel. Deep EDA using Pandas & NumPy to uncover trends.
  Transformed raw datasets into executive-ready visual reports."
  Desc AR: "مجموعة من لوحات التحكم التفاعلية عبر Power BI وTableau وExcel. تحليل استكشافي
  معمق باستخدام Pandas وNumPy لتحويل البيانات الخام إلى تقارير جاهزة للعرض التنفيذي."
- Bullets: ✓ Multi-tool BI portfolio | ✓ Raw data → executive reports | ✓ Visualization best practices
- Links: [GitHub →] — href="#"

CARD 3 — Data Mining Workflows
- Category: data-mining
- Tags: Orange, Classification, Clustering, Decision Trees, Naive Bayes
- Title EN: "Data Mining Visual Workflows" | AR: "مسارات تعدين البيانات البصرية"
- Desc EN: "End-to-end visual workflows in Orange Data Mining for classification and clustering
  using real-world datasets including Amazon delivery data. Defended pipelines in formal
  academic setting covering preprocessing, model training, and evaluation."
  Desc AR: "مسارات عمل بصرية في Orange Data Mining للتصنيف والتجميع ببيانات حقيقية.
  عُرضت المشاريع ودُوفع عنها في بيئة أكاديمية رسمية."
- Bullets: ✓ Visual ML pipelines in Orange | ✓ Defended in academic setting | ✓ Real-world datasets
- Links: [GitHub →] — href="#"

CARD 4 — Capstone Project
- Category: capstone
- Badge: 🎓 In Progress
- Tags: Python, SQL, Power BI, Scikit-learn, Azure, Streamlit
- Title EN: "Capstone — Real-World Analytics Solution" | AR: "مشروع التخرج — حل تحليلي حقيقي"
- Desc EN: "Full-stack analytics solution for the 1,330-hour AI & Data Analytics Diploma at
  the Egyptian Military Academy. Complete pipeline: data sourcing → cleaning → EDA →
  statistical analysis → ML modeling → visualization → deployment on Azure. Expected: August 2026."
  Desc AR: "حل تحليلي متكامل كمشروع تخرج لدبلوم الأكاديمية العسكرية المصرية. يغطي المسار
  الكامل من استيراد البيانات حتى النشر. موعد الإنجاز: أغسطس 2026."
- Bullets: ✓ Full pipeline: data to deployment | ✓ Azure cloud integration | ✓ Expected: August 2026
- Links: [Coming Soon] — disabled state, muted color

FILTER LOGIC (JS):
- Clicking tab sets data-active on it + triggers reflow
- Cards with matching data-category become visible; others get display:none
- "All" tab shows all cards
- Active tab: teal underline border-bottom
```

### projects-fx.js — Implement:

1. `initProjectFilter()` — tab click handler with category filtering and CSS transition

### Self-check:

- [ ] All 4 cards present, Card 1 has teal glow
- [ ] Filter tabs work (All, ML, BI, Data Mining, Capstone)
- [ ] Cards have hover glow effect on desktop
- [ ] "Coming Soon" on Card 4 is visually distinct (muted/disabled)
- [ ] Both EN and AR descriptions populated on all cards

---

## AGENT 4 — "Timeline Builder"

**Owns:** `#experience`, `#education`, `experience-edu.css`
**Depends on:** Integration Agent complete

### Mission Brief

Build the professional experience timeline and the education & certifications section.

### Produce this Artifact first:

```
Implementation Plan — Timeline Builder

EXPERIENCE (#experience):
- Section label "04. EXPERIENCE" / "04. الخبرة"
- Headline EN: "My Professional Journey" | AR: "مسيرتي المهنية"
- Vertical timeline: left border line (2px solid var(--accent-teal)), dot markers (circle, teal fill)
- In RTL mode: border on RIGHT side (use [dir=rtl] #experience .timeline { border-left: none; border-right: 2px solid var(--accent-teal); } )
- 3 timeline entries, most recent at top:

ENTRY 1 — Dec 2025 – Aug 2026
  Role EN: "Trainee — Applied AI & Data Analytics Diploma"
  Role AR: "متدرب — دبلوم الذكاء الاصطناعي وتحليل البيانات التطبيقي"
  Org: "Egyptian Military Academy — War College, Cairo"
  Badge: Education Program
  Bullets EN:
  - Full-time residential: 37 hrs/week, 36 weeks, 1,330 hours total
  - Courses: Statistics, Databases, Data Mining, ML & Deep Learning, Web Analytics, Capstone
  - Tools: Python · SQL · Power BI · Tableau · Orange · Azure
  - Maintaining high performance in disciplined military-structured environment
  Bullets AR:
  - برنامج سكن كامل: 37 ساعة أسبوعياً، 36 أسبوعاً، 1,330 ساعة إجمالاً
  - المقررات: الإحصاء، قواعد البيانات، تعدين البيانات، التعلم الآلي، تحليل الشبكات
  - الأدوات: Python · SQL · Power BI · Tableau · Orange · Azure

ENTRY 2 — Jun 2025 – Nov 2025
  Role EN: "Self-Directed Career Transition — Data Analytics & AI"
  Role AR: "تحول مهني ذاتي — تحليل البيانات والذكاء الاصطناعي"
  Org: "Independent Study"
  Badge: Career Development
  Bullets EN:
  - Earned Google Data Analytics Professional Certificate
  - Earned Microsoft PL-300 Power BI Data Analyst Associate certification
  - Built portfolio projects in Python, SQL, Power BI, Tableau, ML
  - Published work on GitHub and LinkedIn
  Bullets AR:
  - حصلت على شهادة Google Data Analytics Professional
  - حصلت على شهادة Microsoft PL-300
  - بنيت مشاريع وأعددت محفظتي على GitHub وLinkedIn

ENTRY 3 — Oct 2022 – May 2025
  Role EN: "Accountant" | AR: "محاسب"
  Org: "Aurora Oriental Resort — Sharm El-Sheikh, Egypt"
  Badge: Finance & Analytics
  Bullets EN:
  - Analyzed financial data using Excel; organized and reconciled daily transactions
  - Generated management reports and supported quarterly budgeting processes
  - Applied analytical thinking to identify cost trends and optimize reporting workflows
  - Supported financial forecasting with high data accuracy
  - Business context gained: P&L analysis, budget variance, stakeholder reporting
  Bullets AR:
  - حللت البيانات المالية باستخدام Excel ونظمت المعاملات اليومية
  - أنشأت تقارير إدارية ودعمت عمليات الميزانية الفصلية
  - طبقت التفكير التحليلي لتحديد اتجاهات التكلفة

EDUCATION (#education):
- Section label "05. EDUCATION_&_CERTS" / "05. التعليم والشهادات"
- Two columns: left = Education cards, right = Certification cards

EDUCATION CARDS (left):
Card 1:
  Icon: 🎖️
  Title EN: "Specialized Diploma — Applied AI & Data Analytics"
  Title AR: "دبلوم متخصص — الذكاء الاصطناعي وتحليل البيانات التطبيقي"
  Institution: "Egyptian Military Academy — War College, Cairo"
  Date: "December 2025 – August 2026 (Expected)"
  Details: 1,330-hour intensive | Full-time residential | Military discipline
  Tools: Python · SQL · Power BI · Tableau · Orange · Azure

Card 2:
  Icon: 🎓
  Title EN: "Bachelor of Commerce — Accounting"
  Title AR: "بكالوريوس التجارة — قسم المحاسبة"
  Institution: "Zagazig University, Faculty of Commerce"
  Date: "May 2018 – July 2022"
  Grade EN: "Grade: Good" | Grade AR: "التقدير: جيد"

CERTIFICATION CARDS (right):
Cert 1:
  Badge color: teal border
  Icon: "G" in Google colors
  Title EN: "Google Data Analytics Professional Certificate"
  Title AR: "شهادة Google المهنية لتحليل البيانات"
  Issuer: "Google | Coursera"
  Verified badge: ✓ Verified

Cert 2:
  Badge color: blue border
  Icon: "M" in Microsoft colors
  Title EN: "Microsoft Certified: Power BI Data Analyst Associate"
  Title AR: "مايكروسوفت المعتمد: محلل بيانات Power BI"
  Code: PL-300
  Issuer: "Microsoft"
  Verified badge: ✓ Verified

Cert 3:
  Badge color: amber border (#EAB308)
  Icon: "EF"
  Title EN: "EF SET English Certificate — B2 Upper Intermediate"
  Title AR: "شهادة EF SET الإنجليزية — B2 فوق المتوسط"
  Details: "Score: 53/100 | July 2024"
  Issuer: "EF Standard English Test"
```

### Self-check:

- [ ] Timeline has 3 entries in correct order (newest first)
- [ ] Timeline line visible on desktop; switches sides in RTL
- [ ] All bullet points in both EN and AR
- [ ] 2 education cards + 3 certification cards present
- [ ] Certification cards have distinct colored borders

---

## AGENT 5 — "ContactFooter Builder"

**Owns:** `#contact`, `#site-footer`, `contact-footer.css`
**Depends on:** Integration Agent complete

### Mission Brief

Build the contact section (info + form) and footer. Form must show success state on submit
without a backend.

### Produce this Artifact first:

```
Implementation Plan — ContactFooter Builder

CONTACT (#contact):
- Section label "06. CONTACT" / "06. تواصل معي"
- Headline EN: "Let's Build Something Together" | AR: "لنبنِ شيئاً معاً"
- Subheadline EN: "Open to full-time Data Analyst roles and freelance analytics projects.
  Based in Egypt — available for remote work and UAE opportunities."
  AR: "منفتح على وظائف محلل بيانات بدوام كامل ومشاريع تحليلية مستقلة.
  مقيم في مصر — متاح للعمل عن بُعد وفرص الإمارات."
- Two columns on desktop, stacked on mobile

LEFT COLUMN — Contact Info:
  Email: markegyptian55@gmail.com (href="mailto:markegyptian55@gmail.com")
  Phone: +20 122 440 5064 (href="tel:+201224405064")
  Location: El Mansoura, Egypt · Open to: Egypt | UAE | Remote
  LinkedIn: https://linkedin.com/in/mohamed-moustafa-elbasyouni-383650211
  GitHub: https://github.com/markegyptian55-cloud
  Portfolio: https://markegyptian55-cloud.github.io/Portfolio/
  Availability badge: pulsing green dot + "Available for new opportunities"
                                          / "متاح لفرص جديدة"
  Pulse: CSS @keyframes scale 1→1.4→1 on the dot, 1.5s infinite

RIGHT COLUMN — Contact Form:
  All inputs: dark bg (#161B22), teal focus ring (box-shadow: 0 0 0 3px rgba(0,201,167,0.2))
  Field 1 - Name: label EN "Full Name" / AR "الاسم الكامل"
              placeholder data-ph-en="Your full name" data-ph-ar="اسمك الكامل"
  Field 2 - Email: label EN "Email Address" / AR "البريد الإلكتروني"
              placeholder data-ph-en="your@email.com" data-ph-ar="your@email.com"
  Field 3 - Subject: <select> with option values:
    EN: Job Opportunity | Freelance Project | Collaboration | Other
    AR: فرصة عمل | مشروع مستقل | تعاون | أخرى
    NOTE: implement two sets of options, swap on language toggle
  Field 4 - Message: <textarea rows="5">
    placeholder data-ph-en="Tell me about the project or role..."
               data-ph-ar="أخبرني عن المشروع أو الوظيفة..."
  Submit button: full width, teal filled, "Send Message" / "إرسال الرسالة"

  Form submit handler (JS — no backend):
    event.preventDefault()
    Validate: name not empty, email valid format, message not empty
    On valid: hide form, show success card:
      ✓ icon (teal) + EN: "Message sent! I'll get back to you within 24 hours."
                        AR: "تم الإرسال! سأتواصل معك خلال 24 ساعة."
      + "Send another message" link that restores form
    On invalid: show inline error messages below each field

FOOTER (#site-footer):
  Background: #0D1117, border-top: 1px solid var(--border)
  3-column layout: left | center | right
  Left:   "© 2025 Mohamed Elbasyouni" / "© 2025 محمد الباسيوني"
          Small line: "Built with passion for data" / "مبني بشغف البيانات"
  Center: </> logo mark in teal (same as nav)
  Right:  3 social icon links (LinkedIn, GitHub, Portfolio) — muted → teal on hover
  Bottom: "Data Analyst · BI Developer · ML Engineer · Egypt"
          / "محلل بيانات · مطور BI · مهندس تعلم آلة · مصر"
```

### Self-check:

- [ ] All contact info clickable (mailto, tel, external links)
- [ ] Form validates before submit (no empty required fields, email format check)
- [ ] Success state shows and offers "send another" link
- [ ] Pulsing availability badge visible
- [ ] Footer 3-column layout on desktop, stacked on mobile

---

# ═══════════════════════════════════════

# STEP 4 — FINAL INTEGRATION AGENT

# Run AFTER all 5 parallel agents complete

# ═══════════════════════════════════════

**Agent Name:** `Final Assembly`
**Mission:** Merge all section files into a single production `index.html`

## Tasks:

1. Read all files in `/sections/` and `/css/` and `/js/`
2. Inline all CSS from `/css/` files into a single `<style>` block in index.html
3. Inline all JS from `/js/` files into a single `<script>` block before `</body>`
4. Inline all HTML from `/sections/` into the correct section placeholders in index.html
5. Remove all external file references (link tags, script src tags) — everything inline
6. Output: single `index.html` file that works by opening directly in browser

## After merging, open the site in Antigravity's built-in browser and verify:

```
BROWSER QA CHECKLIST

Visual:
□ Dark background (#0D1117) across all sections
□ Teal accent (#00C9A7) on labels, CTAs, borders, skill bars
□ Profile photo visible and circular with gradient ring
□ Hero particle canvas animation running
□ Typewriter cycling through 4 roles

Functionality:
□ Nav links scroll to correct sections
□ Mobile hamburger opens/closes correctly (resize to 375px)
□ Download CV button present in nav
□ Language toggle switches ALL text to Arabic and back
□ RTL layout flips correctly (test at 375px in Arabic)
□ Skill bars animate when scrolled to
□ Stats counter animates in hero
□ Project filter tabs work (click each tab)
□ Contact form validates and shows success state
□ Email and phone links open correctly

Content:
□ Zero placeholder text anywhere on page
□ All 4 project cards present
□ Body Performance Analytics card has teal glow
□ All 3 timeline entries present (newest first)
□ 3 certification cards in education section
□ All social links point to real URLs

Performance:
□ Page loads without console errors
□ Only Google Fonts external request (check Network tab)
□ No React, Vue, or any framework scripts loaded
□ Images have alt text
```

---

# ═══════════════════════════════════════

# OWNER REFERENCE — Contact Details

# (for any agent that needs to embed these)

# ═══════════════════════════════════════

```
Name:      Mohamed Mostafa Elbasyouni
Phone:     +20 122 440 5064
Email:     markegyptian55@gmail.com
LinkedIn:  https://linkedin.com/in/mohamed-moustafa-elbasyouni-383650211
GitHub:    https://github.com/markegyptian55-cloud
Portfolio: https://markegyptian55-cloud.github.io/Portfolio/
Location:  El Mansoura, Egypt
Photo:     pic_a___86_.jpg  (profile photo — already in workspace)
CV PDF:    Replace href="#" on Download CV button with actual PDF filename
```
