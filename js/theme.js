document.addEventListener('DOMContentLoaded', function() {
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  
  // Check for saved theme preference or use system preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    htmlElement.className = savedTheme;
  } else {
    // Check system preference
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    htmlElement.className = prefersDarkMode ? 'dark-mode' : 'light-mode';
  }
  
  // Toggle theme when button is clicked
  themeToggleBtn.addEventListener('click', function() {
    if (htmlElement.classList.contains('light-mode')) {
      htmlElement.classList.replace('light-mode', 'dark-mode');
      localStorage.setItem('theme', 'dark-mode');
    } else {
      htmlElement.classList.replace('dark-mode', 'light-mode');
      localStorage.setItem('theme', 'light-mode');
    }
  });
}); 