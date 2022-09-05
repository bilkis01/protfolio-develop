// swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// scroll to top button

const heroSection = document.querySelector('.section-hero');
const footerElement = document.querySelector('.section-footer');

const scrollElement= document.createElement('div');
scrollElement.classList.add('scrollTop-style');

scrollElement.innerHTML= `<ion-icon class="scroll-top" name="arrow-up-outline"></ion-icon>`

footerElement.after(scrollElement);

const scrollTop = () =>{
    heroSection.scrollIntoView({behavior: "smooth"})
};

scrollElement.addEventListener('click', scrollTop);
