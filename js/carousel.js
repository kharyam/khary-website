/**
 * TESTIMONIAL CAROUSEL
 * Handles automatic and manual testimonial rotation
 */

(function() {
  'use strict';
  
  class Carousel {
    constructor(element) {
      this.carousel = element;
      this.track = element.querySelector('.testimonial-track');
      this.cards = Array.from(element.querySelectorAll('.testimonial-card'));
      this.dots = Array.from(element.querySelectorAll('.carousel-dot'));
      
      this.currentIndex = 0;
      this.autoPlayInterval = null;
      this.autoPlayDelay = 8000; // 8 seconds
      this.isPlaying = true;
      
      this.init();
    }
    
    init() {
      // Set up dot click handlers
      this.dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
          this.goToSlide(index);
          this.pauseAutoPlay();
          // Resume after user interaction
          setTimeout(() => this.startAutoPlay(), 3000);
        });
      });
      
      // Pause on hover
      this.carousel.addEventListener('mouseenter', () => this.pauseAutoPlay());
      this.carousel.addEventListener('mouseleave', () => this.startAutoPlay());
      
      // Keyboard navigation
      document.addEventListener('keydown', (e) => {
        if (!this.isInView()) return;
        
        if (e.key === 'ArrowLeft') {
          this.previous();
          this.pauseAutoPlay();
        } else if (e.key === 'ArrowRight') {
          this.next();
          this.pauseAutoPlay();
        }
      });
      
      // Touch/swipe support
      this.initTouchSupport();
      
      // Start autoplay
      this.startAutoPlay();
    }
    
    goToSlide(index) {
      const currentCard = this.cards[this.currentIndex];
      const nextCard = this.cards[index];
      
      // Add exiting animation to current
      currentCard.classList.add('exiting');
      currentCard.classList.remove('active');
      
      setTimeout(() => {
        currentCard.classList.remove('exiting');
        
        // Update index
        this.currentIndex = index;
        
        // Add entering animation to next
        nextCard.classList.add('entering', 'active');
        
        setTimeout(() => {
          nextCard.classList.remove('entering');
        }, 500);
      }, 250);
      
      // Update dots
      this.dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
      });
      
      // Announce to screen readers
      this.announceSlide(index);
    }
    
    next() {
      const nextIndex = (this.currentIndex + 1) % this.cards.length;
      this.goToSlide(nextIndex);
    }
    
    previous() {
      const prevIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
      this.goToSlide(prevIndex);
    }
    
    startAutoPlay() {
      if (this.autoPlayInterval) return;
      
      this.isPlaying = true;
      this.autoPlayInterval = setInterval(() => {
        this.next();
      }, this.autoPlayDelay);
    }
    
    pauseAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.autoPlayInterval = null;
      }
      this.isPlaying = false;
    }
    
    isInView() {
      const rect = this.carousel.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    }
    
    announceSlide(index) {
      // Create live region for screen readers
      const announcement = `Testimonial ${index + 1} of ${this.cards.length}`;
      const liveRegion = document.getElementById('carousel-live-region');
      
      if (liveRegion) {
        liveRegion.textContent = announcement;
      }
    }
    
    initTouchSupport() {
      let startX = 0;
      let endX = 0;
      
      this.carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
      }, { passive: true });
      
      this.carousel.addEventListener('touchmove', (e) => {
        endX = e.touches[0].clientX;
      }, { passive: true });
      
      this.carousel.addEventListener('touchend', () => {
        const diff = startX - endX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
          if (diff > 0) {
            // Swiped left, go next
            this.next();
          } else {
            // Swiped right, go previous
            this.previous();
          }
          this.pauseAutoPlay();
          setTimeout(() => this.startAutoPlay(), 3000);
        }
      });
    }
  }
  
  /**
   * Initialize carousel
   */
  function init() {
    const carouselElement = document.querySelector('.testimonial-carousel');
    
    if (carouselElement) {
      // Add live region for screen reader announcements
      const liveRegion = document.createElement('div');
      liveRegion.id = 'carousel-live-region';
      liveRegion.className = 'sr-only';
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      document.body.appendChild(liveRegion);
      
      // Initialize carousel
      new Carousel(carouselElement);
    }
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
