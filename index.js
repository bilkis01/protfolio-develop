const heroSection = document.querySelector('.section-hero');

// swiper js code

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// scroll to top button

// const heroSection = document.querySelector('.section-hero'); ....TOP Use
const footerElement = document.querySelector('.section-footer');

const scrollElement = document.createElement('div');
scrollElement.classList.add('scrollTop-style');

scrollElement.innerHTML = `<ion-icon class="scroll-top" name="arrow-up-outline"></ion-icon>`

footerElement.after(scrollElement);

const scrollTop = () => {
    heroSection.scrollIntoView({ behavior: "smooth" })
};

scrollElement.addEventListener('click', scrollTop);


// counter number function

const counterNum = document.querySelectorAll('.counter-numbers');
const speed = 200;

counterNum.forEach(element => {
    const updateNumber = () => {
        const targetNumber = parseInt(element.dataset.number);
        // console.log(targetNumber);
        const initialNum = parseInt(element.innerText);
        // console.log(initialNum);

        const incrementNum = Math.trunc(targetNumber / speed)
        // console.log(incrementNum);

        if (initialNum < targetNumber) {
            element.innerText = `${initialNum + incrementNum}+`;
            setTimeout(updateNumber, 10)
        }
    };
    updateNumber();
});


// navbar toggle functionality
const mobile_nav = document.querySelector('.mobile-navbar-btn');
const headerEle = document.querySelector('.header');

mobile_nav.addEventListener('click', () => {
    headerEle.classList.toggle('active')
});


// sticky navbar functionality

const observer = new IntersectionObserver((entries) => {
    const ent = entries[0]
    console.log(ent);
    !ent.isIntersecting
        ? document.body.classList.add('sticky')
        : document.body.classList.remove('sticky')
},
    {
        root: null,
        threshold: 0,
    });

observer.observe(heroSection);