let btnUp = document.querySelector('.up-button');
let btnDown = document.querySelector('.down-button');
let sidebar = document.querySelector('.sidebar');
let slider = document.querySelector('.main-slide');
let slides = slider.querySelectorAll('div');

let activeSlideIndex = 0;

sidebar.style.top = '-' + (slides.length - 1) + '00vh';

btnUp.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
  console.log(direction);

  if (direction === 'up') {
    activeSlideIndex++;
    if (activeSlideIndex === slides.length) activeSlideIndex = 0;
  } else if (direction === 'down') {
    activeSlideIndex--;
    if (activeSlideIndex === -1) activeSlideIndex = slides.length - 1;
  }

  sidebar.style.transform = 'translateY(+' + activeSlideIndex * 100 + '%)';
  slider.style.transform = 'translateY(-' + activeSlideIndex * 100 + '%)';
}
