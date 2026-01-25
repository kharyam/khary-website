# Khary Mendez - Personal Brand Website

A modern, professional personal brand website showcasing technical expertise, leadership impact, and career journey. Built with vanilla HTML, CSS, and JavaScript—all contained in a single, self-contained file for maximum simplicity and portability.

## Design Philosophy

**"The Architect's Blueprint"** - A blueprint-inspired dark theme that reflects technical precision while maintaining accessibility and professional polish.

### Key Features

- **Blueprint-Inspired Design** - Unique visual aesthetic with animated gradient backgrounds and floating geometric shapes
- **Particle System** - Interactive canvas-based particle network that responds to screen size
- **Scroll Animations** - Smooth, performant Intersection Observer animations throughout
- **Flip Cards** - Interactive impact story cards that flip to reveal details
- **Professional Timeline** - Animated career journey with fly-in effects
- **Typewriter Effect** - Dynamic tagline that types out on page load
- **Counter Animations** - Metrics that count up when scrolled into view
- **Fully Responsive** - Mobile-first design with hamburger menu for smaller screens
- **Accessible** - Semantic HTML, proper heading hierarchy, and keyboard navigation

## Project Structure

```
/
├── index.html              # Main HTML file (contains all CSS and JS inline)
├── assets/
│   └── images/             # Logos and headshot
│       ├── headshot.jpg
│       ├── redhat-logo.svg
│       ├── aws-logo.svg
│       ├── cncf-logo.svg
│       └── ...
├── css/                    # External CSS files (not currently linked)
├── js/                     # External JS files (not currently linked)
├── archive/                # Old prototypes and documentation
└── README.md               # This file
```

**Note**: The website uses a single-file architecture where all styles and scripts are embedded directly in `index.html`. The `css/` and `js/` folders contain modular versions that are not currently in use.

## Website Sections

1. **Hero** - Animated headshot, name with gradient text, subtitle, and typewriter tagline
2. **Metrics Dashboard** - Four animated counters (Years Experience, Certifications, Teams Led, Engineers Mentored)
3. **Impact Stories** - Three flip cards showcasing methodology and results
4. **Professional Journey** - Timeline of career experience with company logos
5. **Testimonials** - Grid of colleague testimonials with staggered scroll animations
6. **Certifications** - Categorized certification cards (Architecture, Kubernetes, Cloud, DevOps)
7. **Publications** - Technical content, tutorials, and collaborative works
8. **Connect** - Social links (LinkedIn, GitHub, KAM Dynamics, Credly, Red Hat Verify)
9. **Footer** - Copyright and credentials summary

## Quick Start

### 1. Clone or Download

Simply download the project files or clone the repository.

### 2. Open in Browser

Open `index.html` in your web browser. That's it! No build process required.

### 3. Deploy

Upload to any web hosting:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

## Customization Guide

### Changing Colors

Edit the CSS custom properties in the `<style>` section of `index.html`:

```css
:root {
  --bg-primary: #0D1B2A;        /* Background */
  --accent-primary: #00D9FF;    /* Main accent (cyan) */
  --accent-secondary: #FFB700;  /* Secondary accent (gold) */
  --text-primary: #E0E1DD;      /* Primary text */
  --text-secondary: #778DA9;    /* Secondary text */
}
```

### Updating Content

**Hero Section** (line ~2244):
- Update name, subtitle, and tagline text
- Replace `assets/images/headshot.jpg` with your photo

**Metrics** (line ~2263):
- Update `data-target` values for each counter
- Change metric labels

**Impact Stories** (line ~2289):
- Edit flip card titles and descriptions
- Update back-of-card content and metrics

**Experience Timeline** (line ~2362):
- Add/remove timeline items
- Update company logos, titles, dates, and descriptions

**Testimonials** (line ~2512):
- Replace quotes and attributions

**Certifications** (line ~2584):
- Add/remove certification cards by category

**Publications** (line ~2702):
- Add/remove publication cards with links

**Connect Links** (line ~2849):
- Update social media URLs

### Adding a New Timeline Entry

```html
<div class="timeline-item">
    <div class="timeline-content">
        <img src="assets/images/company-logo.svg" alt="Company" class="timeline-company-logo">
        <h3 class="timeline-title">Your Title</h3>
        <div class="timeline-date">Start - End</div>
        <p class="timeline-description">Description of role and achievements...</p>
    </div>
    <div class="timeline-dot"></div>
</div>
```

### Adding a New Certification Card

```html
<div class="cert-card">
    <div class="cert-icon">
        <img src="assets/images/cert-logo.svg" alt="Certification">
    </div>
    <div class="cert-info">
        <div class="cert-title">Certification Name</div>
        <div class="cert-issuer">Issuing Organization</div>
    </div>
</div>
```

## Technical Details

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties, Animations
- **Vanilla JavaScript** - No frameworks or dependencies
- **Canvas API** - Particle system animation
- **Intersection Observer API** - Scroll-triggered animations
- **Google Fonts** - Orbitron, Inter, JetBrains Mono, Rajdhani

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Graceful degradation for older browsers.

### Performance

- **No external dependencies** - All code is self-contained
- **Single HTTP request** - Everything loads with the HTML file
- **Optimized animations** - Uses `transform` and `opacity` for GPU acceleration
- **Responsive particles** - Fewer particles on mobile devices
- **Lazy animations** - Elements animate only when scrolled into view

### Accessibility

- **Semantic HTML** - Proper heading hierarchy (H1 to H3), section landmarks
- **ARIA labels** - Screen reader support for interactive elements
- **Keyboard navigation** - All interactive elements accessible via keyboard
- **Color contrast** - Sufficient contrast ratios for readability
- **External link indicators** - `rel="noopener noreferrer"` for security

## Deployment

### GitHub Pages

1. Create repository: `username.github.io`
2. Push code
3. Enable GitHub Pages in Settings
4. Visit `https://username.github.io`

### Netlify

1. Drag folder into Netlify dashboard
2. Done! Auto-deployed at `random-name.netlify.app`
3. Add custom domain in Settings

### Vercel

```bash
npm i -g vercel
vercel
```

### Traditional Hosting

1. Upload via FTP/SFTP
2. Ensure `index.html` is in root
3. Point domain DNS to hosting

## Troubleshooting

**Animations not working?**
- Check browser console for JavaScript errors
- Ensure browser supports Intersection Observer API
- Try a hard refresh (Ctrl+Shift+R)

**Particles not showing?**
- Check if canvas elements are in the DOM
- Verify browser supports Canvas API
- Check for JavaScript errors

**Layout broken on mobile?**
- Verify viewport meta tag is present
- Check hamburger menu toggle functionality
- Test with browser dev tools responsive mode

## Credits

- Design and development: Built for Khary Mendez
- Fonts: Google Fonts (Orbitron, Inter, JetBrains Mono, Rajdhani)
- Icons: Emoji-based with SVG logos for companies/certifications

---

Built with vanilla web technologies. No frameworks, no build steps, just clean code.
