document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});

