// const slider = document.querySelector('.cards-cont');
// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const slideWidth = document.querySelector('.cards').clientWidth;
// let currentIndex = 0;

// function moveToSlide(index) {
//     const offset = -index * slideWidth;
//     slider.Style.transform =`translateX(${offset}px)`;
// }

// function showSlide(direction) {
//     if (direction === 'prev') {
//         currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
//     }else{
//         currentIndex = (currentIndex +1) % slider.children.length;
//     }
//     moveToSlide(currentIndex);
// }

// prevBtn.addEventListener('click', () => showSlide('prev'));
// nextBtn.addEventListener('click', () => showSlide('next'));

var swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        280:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        320:{
            slidesPerView: 2,
            spaceBetween: 10,
        },
        510:{
            slidesPerView: 1,
            spaceBetween: 10,
        },
        758:{
            slidesPerView: 3,
            spaceBetween: 15,
        },
        900:{
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
  });