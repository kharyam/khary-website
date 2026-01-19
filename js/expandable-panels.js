/**
 * EXPANDABLE PANELS
 * Handles certification panel with filtering
 */

(function() {
  'use strict';
  
  class CertificationPanel {
    constructor() {
      this.panel = document.getElementById('cert-panel');
      this.overlay = document.querySelector('.cert-panel-overlay');
      this.openBtn = document.getElementById('view-all-certs');
      this.closeBtn = document.querySelector('.cert-panel-close');
      this.filterBtns = Array.from(document.querySelectorAll('.filter-btn'));
      this.certItems = Array.from(document.querySelectorAll('.cert-item'));
      
      this.isOpen = false;
      
      this.init();
    }
    
    init() {
      if (!this.panel) return;
      
      // Open button
      if (this.openBtn) {
        this.openBtn.addEventListener('click', () => this.open());
      }
      
      // Close button
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.close());
      }
      
      // Overlay click
      if (this.overlay) {
        this.overlay.addEventListener('click', () => this.close());
      }
      
      // Escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          this.close();
        }
      });
      
      // Filter buttons
      this.filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');
          this.filterCertifications(filter);
          this.setActiveFilter(btn);
        });
      });
    }
    
    open() {
      this.panel.classList.add('active');
      this.overlay.classList.add('active');
      this.panel.setAttribute('aria-hidden', 'false');
      this.isOpen = true;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Focus first interactive element
      const firstFocusable = this.panel.querySelector('button, a');
      if (firstFocusable) {
        setTimeout(() => firstFocusable.focus(), 100);
      }
      
      // Trap focus
      this.trapFocus();
    }
    
    close() {
      this.panel.classList.remove('active');
      this.overlay.classList.remove('active');
      this.panel.setAttribute('aria-hidden', 'true');
      this.isOpen = false;
      
      // Restore body scroll
      document.body.style.overflow = '';
      
      // Return focus to open button
      if (this.openBtn) {
        this.openBtn.focus();
      }
    }
    
    filterCertifications(filter) {
      this.certItems.forEach(item => {
        if (filter === 'all') {
          item.classList.remove('hidden');
        } else {
          const categories = item.getAttribute('data-category');
          if (categories && categories.includes(filter)) {
            item.classList.remove('hidden');
          } else {
            item.classList.add('hidden');
          }
        }
      });
      
      // Announce to screen readers
      const visibleCount = this.certItems.filter(item => !item.classList.contains('hidden')).length;
      this.announceFilter(filter, visibleCount);
    }
    
    setActiveFilter(activeBtn) {
      this.filterBtns.forEach(btn => btn.classList.remove('active'));
      activeBtn.classList.add('active');
    }
    
    announceFilter(filter, count) {
      const announcement = `Showing ${count} ${filter === 'all' ? 'all' : filter} certifications`;
      const liveRegion = document.getElementById('filter-live-region');
      
      if (liveRegion) {
        liveRegion.textContent = announcement;
      } else {
        // Create live region if it doesn't exist
        const region = document.createElement('div');
        region.id = 'filter-live-region';
        region.className = 'sr-only';
        region.setAttribute('aria-live', 'polite');
        region.setAttribute('aria-atomic', 'true');
        region.textContent = announcement;
        document.body.appendChild(region);
      }
    }
    
    trapFocus() {
      const focusableElements = this.panel.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      
      const handleTab = (e) => {
        if (!this.isOpen) {
          document.removeEventListener('keydown', handleTab);
          return;
        }
        
        if (e.key === 'Tab') {
          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstFocusable) {
              e.preventDefault();
              lastFocusable.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastFocusable) {
              e.preventDefault();
              firstFocusable.focus();
            }
          }
        }
      };
      
      document.addEventListener('keydown', handleTab);
    }
  }
  
  /**
   * Initialize certification panel
   */
  function init() {
    new CertificationPanel();
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
