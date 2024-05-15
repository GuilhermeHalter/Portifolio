const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const logoImage = document.getElementById('logoImage');
const backgroundImage = document.getElementById('backgroundImage');

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        logoImage.src = "./assets/media/Ggreen-removebg-preview.png"; 
        backgroundImage.src = "./assets/media/backgroundgreen-removebg-preview.png";
    } else {
        body.classList.add('dark-theme');
        logoImage.src = "./assets/media/G-removebg-preview.png"; 
        backgroundImage.src = "./assets/media/background-removebg-preview.png";
    }
});


