// Mobile menu functionality for jidaisha website
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById('mobile-menu-button');
  const menu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  if (!button || !menu || !menuIcon || !closeIcon) {
    console.error('Mobile menu elements not found');
    return;
  }
  
  let isOpen = false;
  
  function openMenu() {
    isOpen = true;
    menu.classList.remove('opacity-0', 'invisible');
    menu.classList.add('opacity-100', 'visible');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    button.setAttribute('aria-expanded', 'true');
    menu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMenu() {
    isOpen = false;
    menu.classList.add('opacity-0', 'invisible');
    menu.classList.remove('opacity-100', 'visible');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    button.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
  
  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }
  
  // Main toggle event - works for both mouse and touch
  button.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });
  
  // Touch event for better mobile support
  button.addEventListener('touchend', function(e) {
    e.preventDefault();
    e.stopPropagation();
    toggleMenu();
  });
  
  // Close menu when clicking menu links
  menu.addEventListener('click', function(e) {
    if (e.target.tagName === 'A') {
      closeMenu();
    }
  });
  
  // Close menu on outside click
  document.addEventListener('click', function(e) {
    if (isOpen && !menu.contains(e.target) && !button.contains(e.target)) {
      closeMenu();
    }
  });
  
  // Close menu on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
    }
  });
  
  // Close menu on window resize
  window.addEventListener('resize', function() {
    if (window.innerWidth >= 768 && isOpen) {
      closeMenu();
    }
  });
  
  console.log('Mobile menu initialized');
});