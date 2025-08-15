// 滚动时导航栏透明度和样式变化
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('main-header');
  let lastScrollY = 0;
  
  function handleScroll() {
    const scrollY = window.scrollY;
    
    if (scrollY > 20) {
      // 滚动时增加背景透明度和阴影
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
      header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
      // 顶部时恢复原始样式
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
    
    lastScrollY = scrollY;
  }
  
  // 使用 requestAnimationFrame 优化性能
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
  
  // 初始设置
  handleScroll();
});