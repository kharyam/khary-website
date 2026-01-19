# Khary Mendez - Personal Brand Website

A modern, professional personal brand website showcasing technical expertise, leadership impact, and project work. Built with vanilla HTML, CSS, and JavaScript—no frameworks, just clean, performant code.

## 🎨 Design Philosophy

**"The Architect's Blueprint"** - A blueprint-inspired dark theme that reflects technical precision while maintaining accessibility and professional polish.

### Key Features

- ✨ **Blueprint-Inspired Design** - Unique visual aesthetic with animated grid backgrounds
- 🌓 **Light/Dark Mode** - Seamless theme switching with localStorage persistence
- 📱 **Fully Responsive** - Mobile-first design that works beautifully on all devices
- ♿ **Accessible** - WCAG compliant with semantic HTML and ARIA labels
- ⚡ **Performance Optimized** - Fast load times, lazy loading, CSS/JS optimization
- 🔍 **SEO Ready** - Structured data, meta tags, semantic markup
- 🎭 **Scroll Animations** - Smooth, performant Intersection Observer animations
- 🎪 **Interactive Elements** - Testimonial carousel, expandable panels, typewriter effect

## 📁 Project Structure

```
/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # Design tokens (colors, spacing, fonts)
│   ├── base.css           # Typography, reset, base styles
│   ├── components.css     # Reusable UI components
│   ├── sections.css       # Page sections (hero, testimonials, etc.)
│   └── animations.css     # Scroll animations and transitions
├── js/
│   ├── theme-toggle.js    # Light/dark mode
│   ├── scroll-animations.js # Intersection Observer animations
│   ├── carousel.js        # Testimonial carousel
│   ├── expandable-panels.js # Certification modal
│   └── main.js            # Initialization and utilities
├── assets/
│   ├── images/            # Images and logos
│   └── icons/             # Icon files
└── README.md              # This file
```

## 🚀 Quick Start

### 1. Clone or Download

Simply download the project files or clone the repository.

### 2. Add Your Photo

Replace the photo placeholder:
- Place your headshot in `/assets/images/headshot.jpg`
- Update the HTML: Replace `.photo-placeholder` with `<img src="assets/images/headshot.jpg" alt="Khary Mendez">`

### 3. Open in Browser

Open `index.html` in your web browser. That's it! No build process required.

### 4. Deploy

Upload to any web hosting:
- GitHub Pages
- Netlify
- Vercel
- Traditional web hosting

## 🎨 Customization Guide

### Changing Colors

Edit `/css/variables.css`:

```css
:root {
  /* Change these values */
  --color-accent-primary: #00D9FF;    /* Main accent color */
  --color-accent-secondary: #FFB700;  /* Secondary accent */
  --color-bg-primary: #0D1B2A;        /* Background */
}
```

**Alternative Color Schemes** are commented out in `variables.css` - uncomment to try:
- Enterprise Modern (Red Hat red theme)
- Trusted Authority (Blue/gold theme)

### Updating Content

**Contact Information** (`index.html` - Connect Section):
```html
<a href="mailto:your@email.com" class="contact-card">
```

**Projects** (`index.html` - Projects Section):
- Edit project titles, descriptions, and links
- Add new projects by duplicating `.project-card` structure

**Certifications** (`index.html` - Certification Panel):
- Add/remove certifications in `.cert-grid`
- Update counter `data-target` value
- Organize by categories using `data-category` attribute

**Testimonials** (`index.html` - Testimonials Section):
- Replace testimonial quotes and attribution
- Add/remove slides (update carousel dot count)

### Customizing Animations

**Scroll Animation Speed** (`css/animations.css`):
```css
.reveal {
  transition: opacity 0.8s; /* Change 0.8s to your preference */
}
```

**Disable Animations**:
Users with `prefers-reduced-motion` automatically get no animations. To globally disable:
```css
/* Add to animations.css */
* {
  animation: none !important;
  transition: none !important;
}
```

## 🔧 Technical Details

### Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties
- **Vanilla JavaScript** - No frameworks
- **Intersection Observer API** - Scroll animations
- **localStorage API** - Theme persistence

### Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

Graceful degradation for older browsers.

### Performance

- **No external dependencies** - All code is self-contained
- **Lazy loading** - Images load as needed
- **CSS optimization** - Organized in logical chunks
- **JS optimization** - Throttled/debounced event handlers
- **Minimal payload** - Fast initial load

### Accessibility

- **Semantic HTML** - Proper heading hierarchy, landmarks
- **ARIA labels** - Screen reader support
- **Keyboard navigation** - All interactive elements accessible
- **Focus management** - Visible focus states, focus trapping in modals
- **Color contrast** - WCAG AA compliant
- **Reduced motion** - Respects user preferences

### SEO

**Structured Data** (`index.html` - in `<head>`):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Khary Mendez",
  ...
}
</script>
```

**Meta Tags**:
- Title, description, keywords
- Open Graph (Facebook/LinkedIn)
- Twitter Cards

**Best Practices**:
- Semantic HTML structure
- Proper heading hierarchy (H1 → H2 → H3)
- Alt text for images
- Descriptive link text

## 📝 Content Updates

### Adding a New Certification

1. Open `index.html`
2. Find the `.cert-grid` section
3. Add new certification:

```html
<div class="cert-item" data-category="kubernetes cloud">
  <div class="cert-item-title">Your Certification Name</div>
  <div class="cert-item-date">Month Year</div>
</div>
```

4. Update counter: Change `data-target="17"` to new count

### Adding a New Testimonial

1. Find `.testimonial-track` in `index.html`
2. Duplicate a `.testimonial-card`:

```html
<div class="testimonial-card">
  <blockquote class="testimonial-quote">
    "Your testimonial quote here..."
  </blockquote>
  <div class="testimonial-author">
    <div class="author-role">Role</div>
    <div class="author-context">Context</div>
  </div>
</div>
```

3. Add corresponding carousel dot in `.carousel-controls`

### Updating Projects

1. Find `.project-grid` in `index.html`
2. Edit or duplicate `.project-card`:

```html
<article class="project-card">
  <div class="project-icon">💡</div>
  <h3 class="project-title">Your Project</h3>
  <p class="project-description">Description...</p>
  <div class="project-tech">
    <span class="tech-tag">Technology</span>
  </div>
  <div class="project-links">
    <a href="..." class="project-link">View Project →</a>
  </div>
</article>
```

## 🎯 SEO Optimization Tips

1. **Update Title & Description** (`index.html` - `<head>`):
   ```html
   <title>Your Name | Your Title</title>
   <meta name="description" content="Your description...">
   ```

2. **Add Images with Alt Text**:
   ```html
   <img src="..." alt="Descriptive text">
   ```

3. **Internal Linking**:
   - Link to important sections
   - Use descriptive anchor text

4. **URL Structure**:
   - Use clean URLs (consider using subdomain or path)
   - Example: `kharymendez.com` (not `kharymendez.com/index.html`)

5. **Submit to Search Engines**:
   - Google Search Console
   - Bing Webmaster Tools
   - Create `sitemap.xml`
   - Create `robots.txt`

## 📱 Mobile Optimization

- **Touch targets** - All buttons 44x44px minimum
- **Readable fonts** - Scales appropriately
- **No horizontal scroll** - Fully contained layout
- **Fast load** - Optimized for mobile networks
- **Touch gestures** - Swipe on testimonial carousel

## 🔒 Security Best Practices

- All external links have `rel="noopener noreferrer"`
- No inline JavaScript (XSS protection)
- Content Security Policy ready
- HTTPS recommended for deployment

## 📊 Analytics Integration

Add your analytics in `js/main.js`:

```javascript
function initAnalytics() {
  // Google Analytics
  // gtag('config', 'YOUR-ID');
  
  // Or Plausible, Fathom, etc.
}
```

## 🚢 Deployment

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

## 🐛 Troubleshooting

**Animations not working?**
- Check browser console for errors
- Verify JavaScript files loaded
- Check browser compatibility

**Theme toggle not persisting?**
- Check browser allows localStorage
- Verify theme-toggle.js loaded
- Clear localStorage and test

**Layout broken on mobile?**
- Test with responsive design mode
- Check viewport meta tag
- Verify CSS files loaded in order

## 🎓 Learning Resources

This site uses:
- **CSS Grid** - [CSS Tricks Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- **Flexbox** - [Flexbox Froggy](https://flexboxfroggy.com/)
- **Intersection Observer** - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- **CSS Custom Properties** - [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)

## 📄 License

This code is provided as-is. Feel free to use and modify for your own personal brand website.

## 🙏 Credits

Design and development: Built for Khary Mendez
Fonts: Google Fonts (Orbitron, Inter, JetBrains Mono)

---

Built with ❤️ using vanilla web technologies.
