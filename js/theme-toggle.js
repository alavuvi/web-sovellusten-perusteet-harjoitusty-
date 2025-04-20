document.getElementById("theme-toggle").addEventListener("click", function() {
    const body = document.body;

    // teema vaihdetaan lisäämällä tai poistomalla luokkia
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        btn.textContent = '☀️';
        btn.setAttribute('aria-label', 'Switch to dark theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        btn.textContent = '🌙';
        btn.setAttribute('aria-label', 'Switch to light theme');
    }
});