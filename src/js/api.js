import 'swiper/css';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

async function fetchData() {
  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (!response.ok) {
      throw new Error('Network response was not OK!');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const swiperWrapper = document.querySelector('.swiper-list-container');

function createSlide(review) {
  return `<li class="swiper-slide swiper-review-slide">
    <div class="review">
      <img src="${review.avatar_url}" alt="Avatar" class="review-avatar">
      <p class="review-author">${review.author}</p>
      <p class="review-text">${review.review}</p>
    </div>
  </li>`;
}

function renderSlides(reviewsData) {
  if (reviewsData.length === 0) {
    alert('Not Found');
  } else {
    const slidesHTML = reviewsData.map(review => createSlide(review)).join('');
    swiperWrapper.insertAdjacentHTML('beforeend', slidesHTML);
  }
}

document.addEventListener('DOMContentLoaded', async function renderEvent() {
  try {
    const reviewsData = await fetchData();
    renderSlides(reviewsData);
    initSwiper();
  } catch (error) {
    console.error('Error rendering reviews:', error);
  }
});

function initSwiper() {
  const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      enabled: true,
      sensitivity: 1,
      eventsTarget: '.swiper',
    },
    navigation: {
      nextEl: '#next_btn',
      prevEl: '#before_btn',
      clickable: true,
    },
    breakpoints: {
      375: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 4,
      },
    },
    effect: 'slide',
    slideToClickedSlide: true,
    touchRatio: 3,
    allowTouchMove: true,
  });

  const sliderNext = document.querySelector('#next_btn');
  const sliderPrev = document.querySelector('#before_btn');

  sliderNext.addEventListener('click', () => {
    swiper.slideNext(500);
  });

  sliderPrev.addEventListener('click', () => {
    swiper.slidePrev(500);
  });
}
