# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal brand website for Khary Mendez - a blueprint-inspired dark theme showcasing technical expertise, certifications, and professional experience. Built with vanilla HTML, CSS, and JavaScript (no frameworks or build process).

## Development

**No build process required.** Open `index.html` directly in a browser or use a local server:

```bash
python -m http.server 8000
```

## Architecture

### Single-File Structure

The website uses a self-contained architecture where all styles and scripts are embedded directly in `index.html` (~4000 lines):

- **CSS** (lines ~125-2100): All styles inline in `<style>` tags
- **HTML** (lines ~2100-3200): Page structure with sections
- **JavaScript** (lines ~3200-4068): Interactive functionality

The `archive/` folder contains old prototypes and documentation (not in use).

### Key Sections (in order)

1. Hero - Animated headshot, gradient text name, typewriter tagline
2. Metrics Dashboard - Animated counters (Years, Certifications, Teams, Engineers)
3. Impact Stories - Flip cards showcasing methodology
4. Professional Journey - Timeline with work history flip cards
5. Certifications - Categorized certification grids
6. Publications - Technical content cards
7. Connect - Social links
8. Footer

### CSS Custom Properties

Colors and theming defined in `:root`:
```css
--bg-primary: #0D1B2A      /* Main background */
--accent-primary: #00D9FF  /* Cyan accent */
--accent-secondary: #FFB700 /* Gold accent */
--text-primary: #E0E1DD    /* Primary text */
--text-secondary: #778DA9  /* Muted text */
```

## Key Implementation Patterns

### Work Card Flip Animation (lines ~3870-4055)

Uses a **clone-based approach** to avoid stacking context issues with CSS 3D transforms:
1. Creates a clone of the clicked card element
2. Appends clone directly to `document.body` (escapes all stacking contexts)
3. Animates clone from original position to center with 180-degree Y-axis rotation
4. Removes clone on close, restoring original card visibility

### Scroll Animations

Uses Intersection Observer API to trigger CSS animations when elements enter the viewport. Elements use `.fade-up` class with `data-delay` attributes for staggered effects.

### Counter Animations

Metrics use `data-target` attributes with JavaScript that animates from 0 to target value when scrolled into view.

## Assets

Images stored in `assets/images/`:
- Company/certification logos: `redhat-logo.svg`, `aws-logo.svg`, `cncf-logo.svg`, etc.
- `headshot.jpg` - Profile photo

## SEO

The site includes comprehensive SEO optimization:
- Meta tags (Open Graph, Twitter Cards)
- JSON-LD structured data (Person, WebSite, BreadcrumbList)
- `sitemap.xml` and `robots.txt` for search engines
- Canonical URL: https://khary.net/
