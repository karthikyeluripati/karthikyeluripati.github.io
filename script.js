function toggleMenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// JavaScript for typewriter effect
const roles = ['Data Scientist', 'Software Engineer', 'AI Researcher']; // Add your roles here
let roleIndex = 0;
let speed = 150; // Typing speed in milliseconds

function typeWriter() {
    let text = roles[roleIndex];
    let i = 0;

    function type() {
        if (i < text.length) {
            document.getElementById("roles").innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(erase, 1000); // Delay before erasing
        }
    }

    function erase() {
        if (text.length > 0) {
            text = text.substring(0, text.length - 1);
            document.getElementById("roles").innerHTML = text;
            setTimeout(erase, speed);
        } else {
            setTimeout(typeWriter, 500); // Delay before typing the next role
        }
    }

    type();
}

// Start the typewriter effect
document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
});
