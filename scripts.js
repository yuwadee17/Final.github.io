// JavaScript for Call to Action Button
document.getElementById('cta-button').addEventListener('click', function() {
    alert('You clicked the Call to Action button!');
});

// JavaScript for Navigation Menu Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
