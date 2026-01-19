/**
 * MAIN.JS
 * Initialization and utility functions
 */

(function() {
  'use strict';
  
  /**
   * Utility: Debounce function calls
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  /**
   * Utility: Throttle function calls
   */
  function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
  /**
   * Analytics / Tracking (placeholder)
   */
  function initAnalytics() {
    // Add your analytics code here
    // Example: Google Analytics, Plausible, etc.
    console.log('Analytics initialized');
  }
  
  /**
   * External link handling
   */
  function initExternalLinks() {
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
      // Ensure proper security attributes
      if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
      }
      
      // Optional: Track external link clicks
      link.addEventListener('click', (e) => {
        const url = link.href;
        console.log('External link clicked:', url);
        // Add tracking here if needed
      });
    });
  }
  
  /**
   * Performance monitoring
   */
  function initPerformanceMonitoring() {
    if ('performance' in window) {
      window.addEventListener('load', () => {
        // Wait a bit for everything to settle
        setTimeout(() => {
          const perfData = performance.getEntriesByType('navigation')[0];
          
          if (perfData) {
            const loadTime = perfData.loadEventEnd - perfData.fetchStart;
            console.log(`Page load time: ${Math.round(loadTime)}ms`);
            
            // Optional: Send to analytics
            // trackTiming('Page Load', loadTime);
          }
        }, 0);
      });
    }
  }
  
  /**
   * Lazy load images (if needed)
   */
  function initLazyLoading() {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });
      
      const lazyImages = document.querySelectorAll('img.lazy');
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }
  
  /**
   * Console easter egg
   */
  function initEasterEgg() {
    const styles = [
      'color: #00D9FF',
      'font-size: 14px',
      'font-weight: bold',
      'padding: 10px'
    ].join(';');
    
    console.log('%c👋 Hello, fellow developer!', styles);
    console.log('%cInterested in how this site was built?', 'color: #778DA9; font-size: 12px;');
    console.log('%cCheck out the source: https://github.com/kharyam', 'color: #778DA9; font-size: 12px;');
    console.log('%cBuilt with ❤️ using vanilla JavaScript, CSS Grid, and modern web standards.', 'color: #778DA9; font-size: 12px; font-style: italic;');
  }
  
  /**
   * Handle mailto links on mobile
   */
  function initMailtoHandling() {
    const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]');
    
    mailtoLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Track email clicks if needed
        console.log('Email link clicked:', link.href);
      });
    });
  }
  
  /**
   * Scroll to top functionality (if needed)
   */
  function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    if (scrollBtn) {
      window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 500) {
          scrollBtn.classList.add('visible');
        } else {
          scrollBtn.classList.remove('visible');
        }
      }, 200));
      
      scrollBtn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }
  
  /**
   * Print styles optimization
   */
  function initPrintOptimization() {
    window.addEventListener('beforeprint', () => {
      console.log('Preparing to print...');
      // Expand all collapsed sections for print
      document.querySelectorAll('details').forEach(details => {
        details.setAttribute('open', '');
      });
    });
    
    window.addEventListener('afterprint', () => {
      console.log('Print complete');
    });
  }
  
  /**
   * Check for browser compatibility
   */
  function checkBrowserCompatibility() {
    const warnings = [];
    
    if (!('IntersectionObserver' in window)) {
      warnings.push('IntersectionObserver not supported - animations may not work');
    }
    
    if (!window.CSS || !CSS.supports('display', 'grid')) {
      warnings.push('CSS Grid not supported - layout may be broken');
    }
    
    if (warnings.length > 0) {
      console.warn('Browser compatibility issues:', warnings);
      // Could show a banner to users here
    }
  }
  
  /**
   * Service Worker registration (for PWA, if needed)
   */
  function initServiceWorker() {
    if ('serviceWorker' in navigator && window.location.protocol === 'https:') {
      // Uncomment to enable service worker
      // navigator.serviceWorker.register('/sw.js')
      //   .then(reg => console.log('Service Worker registered:', reg))
      //   .catch(err => console.log('Service Worker registration failed:', err));
    }
  }
  
  /**
   * Main initialization
   */
  function init() {
    console.log('KM Site initialized');
    
    // Check browser compatibility
    checkBrowserCompatibility();
    
    // Initialize features
    initAnalytics();
    initExternalLinks();
    initPerformanceMonitoring();
    initLazyLoading();
    initEasterEgg();
    initMailtoHandling();
    initScrollToTop();
    initPrintOptimization();
    // initServiceWorker();
    
    // Log successful initialization
    console.log('✓ All systems ready');
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
  
  // Export utilities for potential use
  window.KMUtils = {
    debounce,
    throttle
  };
})();
