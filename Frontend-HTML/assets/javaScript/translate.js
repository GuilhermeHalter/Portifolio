document.addEventListener('DOMContentLoaded', function() {
  // Theme toggle functionality
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  
  // Check for saved theme preference or use default
  const currentTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.className = currentTheme;
  
  // Update icon based on current theme
  updateThemeIcon(currentTheme);
  
  // Toggle theme when button is clicked
  themeToggle.addEventListener('click', function() {
      if (document.documentElement.className === 'dark') {
          document.documentElement.className = 'light';
          localStorage.setItem('theme', 'light');
          updateThemeIcon('light');
      } else {
          document.documentElement.className = 'dark';
          localStorage.setItem('theme', 'dark');
          updateThemeIcon('dark');
      }
  });
  
  function updateThemeIcon(theme) {
      if (theme === 'dark') {
          themeIcon.className = 'fas fa-sun';
      } else {
          themeIcon.className = 'fas fa-moon';
      }
  }
  
  // Language selector functionality
  const translateBtn = document.getElementById('translate-btn');
  const languageModal = document.getElementById('language-modal');
  const closeModal = document.querySelector('.close-modal');
  const languageItems = document.querySelectorAll('.language-item button');
  
  // Open language modal
  translateBtn.addEventListener('click', function() {
      languageModal.style.display = 'block';
  });
  
  // Close language modal
  closeModal.addEventListener('click', function() {
      languageModal.style.display = 'none';
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', function(event) {
      if (event.target === languageModal) {
          languageModal.style.display = 'none';
      }
  });
  
  // Language selection
  languageItems.forEach(function(item) {
      item.addEventListener('click', function() {
          const lang = this.getAttribute('data-lang');
          
          // Remove active class from all items
          document.querySelectorAll('.language-item').forEach(function(el) {
              el.classList.remove('active');
          });
          
          // Add active class to selected item
          this.parentElement.classList.add('active');
          
          // Save selected language
          localStorage.setItem('language', lang);
          
          // Close modal
          languageModal.style.display = 'none';
          
          // In a real application, you would implement language switching here
          console.log('Language changed to: ' + lang);
          
          // For demo purposes, show a notification
          alert('Language changed to: ' + this.querySelector('.lang-name').textContent);
      });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});