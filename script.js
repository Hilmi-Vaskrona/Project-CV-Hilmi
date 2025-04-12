document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.querySelector(".text-animation span");
    const words = [
        "Frontend Developer",
        "Backend Developer",
        "Web Designer",
        "UI/UX Designer",
        "Web Developer"
    ];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            charIndex--;
        } else {
            charIndex++;
        }

        textElement.textContent = currentWord.substring(0, charIndex);

        if (!isDeleting && charIndex === currentWord.length) {
            setTimeout(() => isDeleting = true, 800);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

        setTimeout(typeEffect, isDeleting ? 80 : 120);
    }

    typeEffect();
});

// Skills
function openModal(name, progress, logo) {
    document.getElementById("tech-name").innerText = name;
    document.getElementById("tech-progress").style.width = progress;
    document.getElementById("tech-logo").src = logo;
    document.getElementById("tech-percentage").innerText = progress;
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// Owl Carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 1500,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2.5
            }
        }
    })
})

// responsive-part
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    nav.classList.toggle("hidden");
}

// navbar fa-bars
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});

// Menutup menu setelah salah satu link diklik
document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navMenu.classList.add('hidden');
        }
    });
});