import { createApp } from 'vue';
import App from './App.vue';


import 'bootstrap/dist/css/bootstrap.css';


createApp(App).mount('#app');


import 'swiper/swiper-bundle.css';
// import Swiper JS
import Swiper from 'swiper/bundle';



new Swiper('.swiper-container.img', {
    spaceBetween: 30,
    effect: 'fade',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


new Swiper('.product-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
   
  });