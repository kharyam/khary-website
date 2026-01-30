# AGENTS.md: Khary Mendez Website

## Project Structure
- **Single file**: `index.html` (all CSS/HTML/JS embedded)
- **Assets**: `assets/images/` (logos, headshot)
- **Development**: `python -m http.server 8000`

## Key Conventions
- **CSS Variables**: In `:root` (e.g., `--bg-primary: #0D1B2A`)
- **Animations**: Work cards use clone-based flip (lines ~3870-4055), scroll via Intersection Observer + `.fade-up`
- **No framework**, all vanilla JS/CSS

## Critical Notes
- Never commit `archive/` (outdated)
- Metrics use `data-target` counter animation
- All assets must be in `assets/images/`

## Color Scheme & Design System
- **Primary Background**: `#0D1B2A` (dark navy)
- **Secondary Background**: `#1B263B`
- **Tertiary Background**: `#1e2847`
- **Card Background**: `#1a2238`
- **Primary Accent**: `#00D9FF` (cyan)
- **Secondary Accent**: `#FFB700` (gold/orange)
- **Purple Accent**: `#7c3aed`
- **Green Accent**: `#10b981`
- **Red Accent**: `#ef4444`

## Typography
- **Display Font**: Orbitron (headings, logo)
- **Body Font**: Inter (main text)
- **Mono Font**: JetBrains Mono (code, dates)
- **Nav Font**: Rajdhani (navigation)

## SEO & Structured Data
- **Meta Tags**: Title, description, keywords, author, robots
- **Open Graph**: Facebook sharing with headshot image
- **Twitter Cards**: Summary_large_image format
- **Schema.org**: Person, WebSite, BreadcrumbList structured data
- **Canonical URL**: https://khary.net/
- **Sitemap**: /sitemap.xml

## Key Animations
- **Logo Lighting**: 8s ease-in-out infinite (lines ~329-369)
- **Hero Float**: 6s ease-in-out infinite (lines ~552-555)
- **Hero Glow**: 4s ease-in-out infinite alternate (lines ~491-494)
- **Gradient Shift**: 20s ease infinite (lines ~202-206)
- **Metric Float**: Randomized 2.8-3.5s (lines ~704-735)
- **Card Emoji Float**: 3.5-4.5s (lines ~887-910)
- **Timeline Logo Float**: 4.5-5.5s (lines ~1170-1209)
- **Nav Pulse**: 4s ease-in-out infinite staggered (lines ~426-431)

## Development Setup
```bash
# Start local server
python -m http.server 8000

# Access at
http://localhost:8000
```

## File Structure
```
khary-website/
├── index.html          # Main website (183KB)
├── assets/
│   └── images/         # Logos, headshot.jpg
├── archive/            # Never commit (outdated)
├── CNAME               # Custom domain
├── robots.txt          # SEO robots directives
├── sitemap.xml         # SEO sitemap
└── AGENTS.md           # This file
```