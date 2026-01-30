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