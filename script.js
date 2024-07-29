// script.js

// Function to hide and show header and navigation on scroll
let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll Down
        navbar.style.top = '-60px'; // Adjust this value based on your header height
    } else {
        // Scroll Up
        navbar.style.top = '0';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
