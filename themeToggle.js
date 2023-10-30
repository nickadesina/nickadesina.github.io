document.getElementById('toggleTheme').addEventListener('click', function() {
    let body = document.body;
    let themeIcon = document.getElementById('themeIcon');
    
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        themeIcon.src = "images/moon-solid.svg";  // Moon image representing light mode
    } else {
        body.classList.add('dark-mode');
        themeIcon.src = "images/sun-solid.svg";  // Sun image representing dark mode
    }
});
