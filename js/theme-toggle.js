/**
 * THEME TOGGLE
 * Handles light/dark mode switching with localStorage persistence
 */

(function() {
  'use strict';
  
  const THEME_KEY = 'km-theme';
  const THEME_LIGHT = 'light';
  const THEME_DARK = 'dark';
  
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle?.querySelector('.theme-icon');
  
  /**
   * Get the current theme from localStorage or system preference
   */
  function getCurrentTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    
    if (savedTheme) {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return THEME_LIGHT;
    }
    
    return THEME_DARK; // Default to dark
  }
  
  /**
   * Apply theme to document
   */
  function applyTheme(theme) {
    if (theme === THEME_LIGHT) {
      document.documentElement.setAttribute('data-theme', 'light');
      if (themeIcon) themeIcon.textContent = '🌙';
    } else {
      document.documentElement.removeAttribute('data-theme');
      if (themeIcon) themeIcon.textContent = '☀️';
    }
  }
  
  /**
   * Toggle between themes
   */
  function toggleTheme() {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === THEME_DARK ? THEME_LIGHT : THEME_DARK;
    
    localStorage.setItem(THEME_KEY, newTheme);
    applyTheme(newTheme);
    
    // Dispatch custom event for other components that might need to react
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
  }
  
  /**
   * Initialize theme on page load
   */
  function initTheme() {
    const theme = getCurrentTheme();
    applyTheme(theme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Listen for system theme changes
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
        // Only apply if user hasn't manually set a preference
        if (!localStorage.getItem(THEME_KEY)) {
          applyTheme(e.matches ? THEME_LIGHT : THEME_DARK);
        }
      });
    }
  }
  
  // Initialize immediately
  initTheme();
  
  // Export for potential use by other scripts
  window.KMTheme = {
    toggle: toggleTheme,
    get: getCurrentTheme,
    set: (theme) => {
      localStorage.setItem(THEME_KEY, theme);
      applyTheme(theme);
    }
  };
})();
