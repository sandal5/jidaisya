// Language switcher functionality
document.addEventListener('DOMContentLoaded', function() {
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    const button = langSwitcher.querySelector('button');
    const menu = langSwitcher.querySelector('ul');
    
    if (button && menu) {
      button.addEventListener('click', function(e) {
        e.stopPropagation();
        const isHidden = menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        button.setAttribute('aria-expanded', isHidden.toString());
      });
      
      document.addEventListener('click', function(e) {
        if (!langSwitcher.contains(e.target)) {
          menu.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
        }
      });
      
      // ESC key support
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
          button.focus();
        }
      });
    }
  }
});