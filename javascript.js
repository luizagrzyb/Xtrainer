
document.addEventListener("DOMContentLoaded", function() {
    const carousel = new bootstrap.Carousel('#carouselExampleDark');
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




