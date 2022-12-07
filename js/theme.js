window.onload = function () {
    if (window.localStorage.getItem('darkModeOn') === 'true') {
        themeSwitcher(); 
        document.body.style.transition = "none";
    }
}

let themeBtn = document.getElementById("theme");
let themeIcon = document.getElementById("themeIcon");
let themeText = document.getElementById("themeText");

function themeSwitcher() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        themeIcon.src = "images/sun.png";
        themeText.innerHTML = "Light";
        document.body.style.transition = "background 0.8s, color 0.8s";
        window.localStorage.setItem('darkModeOn', 'true');
    } else {
        themeIcon.src = "images/moon.png";
        themeText.innerHTML = "Dark";
        document.body.style.transition = "background 0.8s, color 0.8s";
        window.localStorage.setItem('darkModeOn', 'false');
    }
};
