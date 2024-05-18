const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const logoImage = document.getElementById('logoImage');
const backgroundImage = document.getElementById('backgroundImage');
const backgroundImages = document.getElementById('backgroundImages');

function applyLightTheme() {
    body.classList.remove('dark-theme');
    logoImage.src = "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2FGgreen-removebg-preview.png?alt=media&token=bbb7e6a0-ef5f-41d6-bb2d-c9e0c9d5d609";
    backgroundImage.src = "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2Fbackgroundgreen-removebg-preview.png?alt=media&token=da8c49e6-51c8-4031-b16e-a962b0f4f3ea";
    backgroundImages.src = "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2Fbackgroundgreen-removebg-preview.png?alt=media&token=da8c49e6-51c8-4031-b16e-a962b0f4f3ea";
}

function applyDarkTheme() {
    body.classList.add('dark-theme');
    logoImage.src = "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2FG-removebg-preview.png?alt=media&token=cd6af15a-72dc-4c79-af72-016b13556c17";
    backgroundImage.src = "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2Fbackground-removebg-preview.png?alt=media&token=fea20cc1-fc84-4e88-abad-836203569f34";
    backgroundImages.src = "https://firebasestorage.googleapis.com/v0/b/portifolio-20d01.appspot.com/o/Portifolio%2Fbackground-removebg-preview.png?alt=media&token=fea20cc1-fc84-4e88-abad-836203569f34";
}

function toggleTheme() {
    if (body.classList.contains('dark-theme')) {
        applyLightTheme();
        localStorage.setItem('theme', 'light');
    } else {
        applyDarkTheme();
        localStorage.setItem('theme', 'dark');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        applyDarkTheme();
    } else {
        applyLightTheme();
    }
}

themeToggle.addEventListener('click', toggleTheme);

loadTheme();
