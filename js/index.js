const moonIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
const sunIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
const btn = document.getElementById("theme-toggle")

// Teeman haku localstoragesta
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(savedTheme);
    btn.innerHTML = savedTheme === 'dark-theme' ? moonIcon : sunIcon;
}

// teemavalinta ja tallennus localstorageen
btn.addEventListener("click",() => {
    const body = document.body
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme')
        body.classList.add('light-theme')
        btn.innerHTML = sunIcon
        btn.setAttribute('aria-label', 'Switch to dark theme')
        localStorage.setItem('theme', 'light-theme')
    } else {
        body.classList.remove('light-theme')
        body.classList.add('dark-theme')
        btn.innerHTML = moonIcon
        btn.setAttribute('aria-label', 'Switch to light theme')
        localStorage.setItem('theme', 'dark-theme')
    }
})

// Yhtedenottolomake, virheenkäsittely ja nollaus onnistuneen lähetyksen jälkeen
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.contact-form')
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault()
            const data = new FormData(form)
            fetch(form.action, {
                method: form.method,
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    form.reset()
                    alert("Thank you for your message!")
                } else {
                    alert("There was a problem sending your message.")
                }
            }).catch(() => {
                alert("There was a problem sending your message.")
            })
        })
    }
})