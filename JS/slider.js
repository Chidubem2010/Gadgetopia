const slider = document.querySelector('.cards-cont');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const slideWidth = document.querySelector('.cards').clientWidth;
let currentIndex = 0;

function moveToSlide(index) {
    const offset = -index * slideWidth;
    slider.Style.transform =`translateX(${offset}px)`;
}

function showSlide(direction) {
    if (direction === 'prev') {
        currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    }else{
        currentIndex = (currentIndex +1) % slider.children.length;
    }
    moveToSlide(currentIndex);
}

prevBtn.addEventListener('click', () => showSlide('prev'));
nextBtn.addEventListener('click', () => showSlide('next'));