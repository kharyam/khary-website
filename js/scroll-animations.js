/**
 * SCROLL ANIMATIONS
 * Handles scroll-triggered animations using Intersection Observer
 */

(function() {
  'use strict';
  
  /**
   * Generate floating particles
   */
  function initParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 8 : 18;
    
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      
      // Random size
      const size = 3 + Math.random() * 4;
      particle.style.width = size + 'px';
      particle.style.height = size + 'px';
      
      // Random position
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      
      // Random drift
      const driftX = (Math.random() - 0.5) * 80;
      particle.style.setProperty('--drift-x', driftX + 'px');
      
      // Animation
      const duration = 20 + Math.random() * 20;
      particle.style.animation = `float-particle ${duration}s ease-in-out infinite`;
      particle.style.animationDelay = -(Math.random() * 20) + 's';
      
      container.appendChild(particle);
    }
  }
  
  /**
   * Initialize parallax for background shapes
   */
  function initParallax() {
    if (window.innerWidth < 768) return;
    
    const shapes = document.querySelectorAll('.parallax-shapes .shape');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      
      shapes.forEach((shape, index) => {
        const speed = 0.1 + (index * 0.05);
        const yPos = -(scrolled * speed);
        shape.style.transform = `translateY(${yPos}px)`;
      });
    }, { passive: true });
  }
  
  /**
   * Initialize scroll-triggered animations
   */
  function initScrollAnimations() {
    // Configuration
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    };
    
    // Create observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          // Optionally unobserve after animating
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all reveal elements
    const revealElements = document.querySelectorAll(
      '.reveal, .fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .scale-in'
    );
    
    revealElements.forEach(el => observer.observe(el));
  }
  
  /**
   * Animate counter numbers
   */
  function animateCounter(element, target) {
    const duration = 2000; // 2 seconds
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + '+';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current);
      }
    }, 16);
  }
  
  /**
   * Initialize counter animation
   */
  function initCounterAnimation() {
    const counter = document.querySelector('.counter-number');
    if (!counter) return;
    
    const target = parseInt(counter.getAttribute('data-target'));
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          counter.classList.add('animating');
          animateCounter(counter, target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(counter);
  }
  
  /**
   * Animate philosophy diagram
   */
  function initPhilosophyAnimation() {
    const diagram = document.querySelector('.philosophy-diagram');
    if (!diagram) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          diagram.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(diagram);
  }
  
  /**
   * Animate contact cards with staggered entrance
   */
  function initContactAnimation() {
    const contactCards = document.querySelectorAll('.contact-email, .contact-linkedin, .contact-github');
    if (contactCards.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    contactCards.forEach(card => observer.observe(card));
  }
  
  /**
   * Smooth scroll to section
   */
  function initSmoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          const navHeight = document.querySelector('.nav').offsetHeight;
          const targetPosition = target.offsetTop - navHeight - 20;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
      scrollIndicator.addEventListener('click', () => {
        const firstSection = document.querySelector('#philosophy');
        if (firstSection) {
          firstSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }
  
  /**
   * Add scrolled class to nav on scroll
   */
  function initNavScroll() {
    const nav = document.getElementById('main-nav');
    if (!nav) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }
  
  /**
   * Typewriter effect for hero quote
   */
  function initTypewriter() {
    const typewriterEl = document.querySelector('.typewriter');
    if (!typewriterEl) return;
    
    const text = typewriterEl.getAttribute('data-text');
    if (!text) return;
    
    const textEl = typewriterEl.querySelector('.typewriter-text');
    const cursorEl = typewriterEl.querySelector('.typewriter-cursor');
    
    if (!textEl) return;
    
    // Show text immediately to avoid blank screen
    textEl.textContent = '';
    
    let index = 0;
    const speed = 60; // ms per character - faster
    
    // Start immediately
    const type = () => {
      if (index < text.length) {
        textEl.textContent = text.substring(0, index + 1);
        index++;
        setTimeout(type, speed);
      } else {
        // Hide cursor after typing completes
        setTimeout(() => {
          if (cursorEl) cursorEl.classList.add('hide');
        }, 1000);
      }
    };
    
    // Start typing after brief delay
    setTimeout(type, 800);
  }
  
  /**
   * Initialize all scroll animations
   */
  function init() {
    initParticles();
    initParallax();
    initScrollAnimations();
    initCounterAnimation();
    initPhilosophyAnimation();
    initContactAnimation();
    initSmoothScroll();
    initNavScroll();
    initTypewriter();
  }
  
  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
