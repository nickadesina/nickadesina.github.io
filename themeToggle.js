document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const themeToggleButton = document.getElementById('toggleTheme');
    const themeIcon = document.getElementById('themeIcon');

    // Function to toggle the theme
    function toggleTheme() {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeIcon.src = 'images/sun-solid.svg'; // Optional: Update to a sun icon for dark mode
            localStorage.setItem('theme', 'dark');
        } else {
            themeIcon.src = 'images/moon-solid.svg'; // Reset back to moon icon for light mode
            localStorage.setItem('theme', 'light');
        }
    }

    // Check local storage and apply user's theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.src = 'images/sun-solid.svg'; // Optional: Update to a sun icon for dark mode
    }

    // Event listener for the button
    themeToggleButton.addEventListener('click', toggleTheme);
});
