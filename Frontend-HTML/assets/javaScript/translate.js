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
    const languageSelect = document.getElementById('language-select');
    
    // Check for saved language preference or use default
    const currentLanguage = localStorage.getItem('language') || 'en';
    languageSelect.value = currentLanguage;
    
    // Apply translations on page load
    applyTranslations(currentLanguage);
    
    // Change language when select changes
    languageSelect.addEventListener('change', function() {
        const selectedLanguage = this.value;
        localStorage.setItem('language', selectedLanguage);
        applyTranslations(selectedLanguage);
    });
    
    // Function to apply translations
    function applyTranslations(language) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
        
        // Handle placeholders
        const placeholderElements = document.querySelectorAll('[data-i18n-placeholder]');
        placeholderElements.forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            if (translations[language] && translations[language][key]) {
                element.placeholder = translations[language][key];
            }
        });
    }
    
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