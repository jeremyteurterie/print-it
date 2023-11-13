const slides = [
  {
    image: 'slide1.jpg',
    tagLine: 'Impressions tous formats <span>en boutique et en ligne</span>',
  },
  {
    image: 'slide2.jpg',
    tagLine:
      'Tirages haute définition grand format <span>pour vos bureaux et events</span>',
  },
  {
    image: 'slide3.jpg',
    tagLine: 'Grand choix de couleurs <span>de CMJN aux pantones</span>',
  },
  {
    image: 'slide4.png',
    tagLine: 'Autocollants <span>avec découpe laser sur mesure</span>',
  },
];

const img = document.querySelector('.banner-img');
const tagLine = document.querySelector('p');
const dotsContainer = document.querySelector('.dots');
const arrowLeft = document.getElementById('arrowLeft');
const arrowRight = document.getElementById('arrowRight');

let indexSlide = 0;

arrowRight.addEventListener('click', () => updateSlide(++indexSlide));
arrowLeft.addEventListener('click', () => updateSlide(--indexSlide));

function updateSlide(index) {
  index = (index + slides.length) % slides.length;
  const slide = slides[index];
  img.src = `./assets/images/slideshow/${slide.image}`;
  tagLine.innerHTML = slide.tagLine;

  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot, i) => dot.classList.toggle('dot_selected', i === index));
}

slides.forEach(() => {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
});

updateSlide(0);

// const img = document.querySelector('.banner-img');
// const tagLine = document.querySelector('p');
// const dotsContainer = document.querySelector('.dots');
// const arrowLeft = document.getElementById('arrowLeft');
// const arrowRight = document.getElementById('arrowRight');

// let indexSlide = 0;

// arrowRight.addEventListener('click', function () {
//   indexSlide++;
//   if (indexSlide >= slides.length) {
//     indexSlide = 0;
//   }
//   updateSlide();
// });

// arrowLeft.addEventListener('click', function () {
//   indexSlide--;
//   if (indexSlide < 0) {
//     indexSlide = slides.length - 1;
//   }
//   updateSlide();
// });

// function updateSlide() {
//   const slide = slides[indexSlide];
//   img.src = './assets/images/slideshow/' + slide.image;
//   tagLine.innerHTML = slide.tagLine;

//   const dots = dotsContainer.querySelectorAll('.dot');
//   dots.forEach((dot, i) => {
//     if (i === indexSlide) {
//       dot.classList.add('dot_selected');
//     } else {
//       dot.classList.remove('dot_selected');
//     }
//   });
// }

// for (let i = 0; i < slides.length; i++) {
//   const dot = document.createElement('div');
//   dot.classList.add('dot');
//   dotsContainer.appendChild(dot);
// }

// dotsContainer.children[0].classList.add('dot_selected');

// updateSlide();
