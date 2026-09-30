document.addEventListener('DOMContentLoaded', () => {
  
  
  
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('sun-icon');
  const moonIcon = document.getElementById('moon-icon');

  
  const applyTheme = (isDark) => {
    if (isDark) {
      document.body.classList.add('dark-mode');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      document.body.classList.remove('dark-mode');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }
  };

  
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  let isDarkMode = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
  applyTheme(isDarkMode);

  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      isDarkMode = !isDarkMode;
      applyTheme(isDarkMode);
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
  }

  
  
  
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  const sidebarLinks = document.querySelectorAll('.sidebar-item-link');

  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href.endsWith('index.html') && href.split('/').length <= 2) {
      if (currentPath === '/' || currentPath.endsWith('index.html') && !currentPath.includes('/docs/') && !currentPath.includes('/about/')) {
        link.classList.add('active');
      }
    } else if (currentPath.includes('/docs/') && href.includes('/docs/')) {
      link.classList.add('active');
    } else if (currentPath.includes('/about/') && href.includes('/about/')) {
      link.classList.add('active');
    }
  });

  
  sidebarLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    const cleanHref = href.replace('../../', '').replace('../', '');
    const cleanPath = currentPath;
    
    if (cleanPath.includes('/installation/') && cleanHref.includes('installation')) {
      link.classList.add('active');
    } else if (cleanPath.includes('/navbar-kiri/') && cleanHref.includes('navbar-kiri')) {
      link.classList.add('active');
    }
  });

  
  
  
  const searchInput = document.querySelector('.search-input');
  
  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        searchInput.blur();
      }
    });

    
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        alert(`Searching for: "${searchInput.value}"... (Aplikasi demo: modul pencarian tidak tersambung)`);
        searchInput.value = '';
        searchInput.blur();
      }
    });
  }

  
  
  
  const tocLinks = document.querySelectorAll('.toc-link');
  const headings = Array.from(document.querySelectorAll('.docs-body section h2, .docs-body section h3'));

  if (tocLinks.length > 0 && headings.length > 0) {
    const options = {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0.1
    };

    let activeHeadingId = null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeHeadingId = entry.target.id;
          updateActiveTOC();
        }
      });
    }, options);

    headings.forEach(heading => observer.observe(heading));

    const updateActiveTOC = () => {
      tocLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${activeHeadingId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };
  }
});
