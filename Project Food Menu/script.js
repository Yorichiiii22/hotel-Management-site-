
const themeToggle = document.querySelector('#checkbox');
const body = document.body;
console.log('script is running')


const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
    if (currentTheme === 'dark-mode') {
        themeToggle.checked = true;
    }
}


themeToggle.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
        console.log("dark mode")
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');
        console.log("lightmode")
    }
});


document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#newlogo', {
        strings: ['Restro.', "Taste unique"],
        loop: true,
        typeSpeed: 80,
        backSpeed: 25,
        backDelay: 1000,
        startDelay: 500
    });
});


const backToTopButton = document.createElement("button");
backToTopButton.innerHTML = "↑";
backToTopButton.setAttribute("id", "back-to-top-btn");
document.body.appendChild(backToTopButton);

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

backToTopButton.onclick = function() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
};


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});