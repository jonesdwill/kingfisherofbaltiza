/* =========================================================
   Kingfisher of Baltiza — Main JavaScript
   ========================================================= */

(function () {
  'use strict';

  /* --- Mobile navigation toggle --- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
      toggle.textContent = isOpen ? '✕' : '☰';
    });

    // Close menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.textContent = '☰';
      });
    });
  }

  /* --- Active nav link based on current page --- */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --- Newsletter form --- */
  var forms = document.querySelectorAll('.follow-form');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var email = form.querySelector('input[type="email"]').value.trim();
      if (!email) return;
      var btn = form.querySelector('button');
      var original = btn.textContent;
      btn.textContent = 'Subscribed! 🎉';
      btn.disabled = true;
      form.querySelector('input[type="email"]').value = '';
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 4000);
    });
  });

  /* --- Scroll-based header shadow --- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,.45)';
      } else {
        header.style.boxShadow = '0 2px 12px rgba(0,0,0,.3)';
      }
    }, { passive: true });
  }

  /* --- Fade-in on scroll (Intersection Observer) --- */
  if ('IntersectionObserver' in window) {
    var style = document.createElement('style');
    style.textContent = '.fade-in{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}.fade-in.visible{opacity:1;transform:none}';
    document.head.appendChild(style);

    document.querySelectorAll(
      '.exp-card, .post-card, .timeline-item, .blog-post-item, .stat-box'
    ).forEach(function (el) {
      el.classList.add('fade-in');
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  }
})();
