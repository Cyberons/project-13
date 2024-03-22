'use strict';

////////////////////////ACCORDION CODE//////////////////////////////

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionContainer = Array.from(
  document.querySelectorAll('.container-about')
);

const accordions = accordionContainer.map(container =>
  container.querySelector('.accordion-list')
);

const acTextAboutMeElements = Array.from(document.querySelectorAll('.ac-text-about-me'));

// Ініціалізуємо акордеон
const myAccordion = new Accordion(accordions, {
    showMultiple: true,
    elementClass: 'accordion-element',
    triggerClass: 'accordion-title',
    panelClass: 'accordion-description',
    openOnInit: [], // Відкриваємо всі елементи за замовчуванням
    onOpen: function (currentElement) {
        currentElement.querySelector('.accordion-title').classList.add('active');
    },
    onClose: function (currentElement) {
        currentElement.querySelector('.accordion-title').classList.remove('active');
    },
});

// Додаємо обробник подій для елементів .ac-text-about-me
acTextAboutMeElements.forEach(element => {
    element.addEventListener('click', function() {
        const accordionPanel = this.closest('.accordion-element').querySelector('.accordion-description');
        if (accordionPanel.classList.contains('active')) {
            accordionPanel.classList.remove('active');
        } else {
            accordionPanel.classList.add('active');
        }
    });
});


////////////////////////SWIPER CODE//////////////////////////////

import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

const swiperAbout = new Swiper('.skills-container', {
  loop: true,
  direction: 'horizontal',
  allowSlideNext: true,
  setWrapperSize: true,
  modules: [Navigation, Keyboard, Mousewheel],
  simulateTouch: true,
  grabCursor: true,
  spaceBetween: 0,
  speed: 1000,
  navigation: {
    nextEl: '.swipe-next-button',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  keyboard: {
    enabled: true,
  },
  mousewheel: {
    invert: true,
  },
});
