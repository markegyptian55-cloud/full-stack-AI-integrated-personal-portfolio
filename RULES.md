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
- Google Fonts is the ONLY external resource allowed (via `<link>` tag)
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
- All form inputs: paired `<label>` elements
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

```
