import { createApp } from 'vue';
import App from './App.vue';


import 'bootstrap/dist/css/bootstrap.css';


createApp(App).mount('#app');


import 'swiper/swiper-bundle.css';
// import Swiper JS
import Swiper from 'swiper/bundle';



new Swiper('.swiper-container', {
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