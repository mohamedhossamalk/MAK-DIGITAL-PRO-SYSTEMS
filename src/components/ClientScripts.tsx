'use client';

import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    // Back to top button functionality
    const backToTopButton = document.getElementById('back-to-top');
    const loadingIndicator = document.getElementById('loading-indicator');

    // Show/hide back to top button based on scroll position
    const handleScroll = () => {
      if (backToTopButton) {
        if (window.scrollY > 300) {
          backToTopButton.classList.remove('opacity-0', 'invisible');
          backToTopButton.classList.add('opacity-100', 'visible');
        } else {
          backToTopButton.classList.add('opacity-0', 'invisible');
          backToTopButton.classList.remove('opacity-100', 'visible');
        }
      }
    };

    // Scroll to top when back to top button is clicked
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Loading indicator for page transitions
    const showLoadingIndicator = () => {
      if (loadingIndicator) {
        loadingIndicator.classList.remove('hidden');
        const progressBar = loadingIndicator.querySelector('div');
        if (progressBar) {
          progressBar.style.width = '100%';
        }
      }
    };

    const hideLoadingIndicator = () => {
      if (loadingIndicator) {
        const progressBar = loadingIndicator.querySelector('div');
        if (progressBar) {
          progressBar.style.width = '0%';
        }
        setTimeout(() => {
          loadingIndicator.classList.add('hidden');
        }, 300);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    if (backToTopButton) {
      backToTopButton.addEventListener('click', scrollToTop);
    }

    // Show loading indicator on route changes
    const handleRouteChangeStart = () => showLoadingIndicator();
    const handleRouteChangeComplete = () => hideLoadingIndicator();

    // Listen for Next.js route changes
    if (typeof window !== 'undefined') {
      // This will work with Next.js App Router
      const originalPushState = history.pushState;
      const originalReplaceState = history.replaceState;

      history.pushState = function(...args) {
        originalPushState.apply(history, args);
        handleRouteChangeStart();
        setTimeout(handleRouteChangeComplete, 500);
      };

      history.replaceState = function(...args) {
        originalReplaceState.apply(history, args);
        handleRouteChangeStart();
        setTimeout(handleRouteChangeComplete, 500);
      };
    }

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (backToTopButton) {
        backToTopButton.removeEventListener('click', scrollToTop);
      }
    };
  }, []);

  return null; // This component doesn't render anything
} 