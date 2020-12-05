<template>
    <main class="main-site">
        <section class="banner-arias" id="banner-aria">
            <div class="container">
                <div class="swiper-container p-0 m-0 container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="image in images" :key="image.id">
                            <img class="w-100" :src="image.slider" :alt="images.alt">
                        </div>
                    </div>
                    <div class="swiper-pagination swiper-pagination-white"></div>
                    <div class="swiper-button-next swiper-button-white"></div>
                    <div class="swiper-button-prev swiper-button-white"></div>
                </div>
            </div>
        </section>

        <!-- Start servisess -->
         
        <div class="container">
            <div class="servisess">
                <div class="items-servisess">
                    <div class="servisess-item">
                        <img width="100px" src="../assets/image-servisess/free-send.svg" alt="">
                        <p>ارسال رایگان به سراسر کشور</p>
                        <br>
                        <small>
                            اگر از سایت فلان خرید کنید ما برای تمامی محصولات زنبور عسل ارسال رایگان را در نظر گرفته ایم
                        </small>
                    </div>
                    <div class="servisess-item">
                        <img width="100px" src="../assets/image-servisess/rerurn-product.svg" alt="">
                        <p>ضمانت بازگشت وجه</p>
                        <br>
                        <small>
                            در صورت طبیعی نبودن محصول کل مبلغ پرداخت شده از شما را بهتا بر میگردانیم 
                        </small>
                    </div>
                    <div class="servisess-item">
                        <img width="100px" src="../assets/image-servisess/support-24.svg" alt="">
                        <p>پشتیبانی 24 ساعته</p>
                        <br>
                        <small>
                            ما در 24 ساعت پاسخ گوی شما عزیزان هستیم 
                        </small>
                    </div>
                    <div class="servisess-item">
                        <img width="100px" src="../assets/image-servisess/tarxk-time.svg" alt="">
                        <p>ارسال سریع محصول</p>
                        <br>
                        <small>
                            بعد از خرید محصول رو خیلی سریع تحویلتان میدهیم
                        </small>
                    </div>
                </div>
            </div>
        </div>

         <!-- End servisess -->




         <section id="top-sale">
            <div class="container py-5">
                <h4>
                    <span>محصولات ما</span>
                </h4>
                <!-- owl-carousel -->

                    <swiper dir="rtl" class="container" :autoplay="{ delay: 2500, disableOnInteraction: false }" :slides-per-view="4" :space-between="30" :pagination="{ clickable: true, el: '.slider-pagination' }">

                      
                        <swiper-slide>
                            <div class="product">
                                <a href="#"><img src="./images/product-img/download.jpg" alt=""
                                                 class="img-fluid"></a>
                                <div class="title-product mt-2">
                                    <h6>عسل آویشن 5 کیلویی</h6>
                                    <div class="price py-3">
                                        <p>تومان</p>&nbsp;<span>110,000</span>
                                    </div>
                                    <div class="btn-shoping-card">
                                        <button class="btn-register-system" style="width: 110px;"><i
                                                class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>


                        <swiper-slide>
                            <div class="product">
                                <a href="#"><img src="./images/product-img/download.jpg" alt=""
                                                 class="img-fluid"></a>
                                <div class="title-product mt-2">
                                    <h6>عسل آویشن 5 کیلویی</h6>
                                    <div class="price py-3">
                                        <p>تومان</p>&nbsp;<span>110,000</span>
                                    </div>
                                    <div class="btn-shoping-card">
                                        <button class="btn-register-system" style="width: 110px;"><i
                                                class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>


                        <swiper-slide>
                            <div class="product">
                                <a href="#"><img src="./images/product-img/download.jpg" alt=""
                                                 class="img-fluid"></a>
                                <div class="title-product mt-2">
                                    <h6>عسل آویشن 5 کیلویی</h6>
                                    <div class="price py-3">
                                        <p>تومان</p>&nbsp;<span>110,000</span>
                                    </div>
                                    <div class="btn-shoping-card">
                                        <button class="btn-register-system" style="width: 110px;"><i
                                                class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>


                        <swiper-slide>
                            <div class="product">
                                <a href="#"><img src="./images/product-img/download.jpg" alt=""
                                                 class="img-fluid"></a>
                                <div class="title-product mt-2">
                                    <h6>عسل آویشن 5 کیلویی</h6>
                                    <div class="price py-3">
                                        <p>تومان</p>&nbsp;<span>110,000</span>
                                    </div>
                                    <div class="btn-shoping-card">
                                        <button class="btn-register-system" style="width: 110px;"><i
                                                class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        
                        <swiper-slide>
                            <div class="product">
                                <a href="#"><img src="./images/product-img/download.jpg" alt=""
                                                 class="img-fluid"></a>
                                <div class="title-product mt-2">
                                    <h6>عسل آویشن 5 کیلویی</h6>
                                    <div class="price py-3">
                                        <p>تومان</p>&nbsp;<span>110,000</span>
                                    </div>
                                    <div class="btn-shoping-card">
                                        <button class="btn-register-system" style="width: 110px;"><i
                                                class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                        
                        <swiper-slide>
                            <div class="product">
                                <a href="#"><img src="./images/product-img/download.jpg" alt=""
                                                 class="img-fluid"></a>
                                <div class="title-product mt-2">
                                    <h6>عسل آویشن 5 کیلویی</h6>
                                    <div class="price py-3">
                                        <p>تومان</p>&nbsp;<span>110,000</span>
                                    </div>
                                    <div class="btn-shoping-card">
                                        <button class="btn-register-system" style="width: 110px;"><i
                                                class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>
                      
                      <div class="swiper-pagination"></div>
                    </swiper>
                <!-- owl-carousel -->
            </div>
        </section>
    </main>
</template>

<script>
    import { Swiper, SwiperSlide } from "swiper/vue";
    import SwiperCore, { Autoplay, Pagination, A11y } from "swiper";
    
    import "swiper/swiper-bundle.css";
    SwiperCore.use([Autoplay, Pagination, A11y]);
export default{
    data(){
        return{
            images: [
                { slider: require('../assets/slider/banner1.jpg'), alt: "honey-banner1" },
                { slider: require('../assets/slider/banner2.jpg'), alt: "honey-banner2" },
                { slider: require('../assets/slider/banner3.jpg'), alt: "honey-banner3" },
            ]
        }
    },

    components: {
        Swiper,
        SwiperSlide,
    },
}
</script>

<style scoped>
.swiper-container-img {
    width: 100%;
    height: 100%;
  }

  .swiper-slide-img{
    background-position: center;
    background-size: cover;
  }

    .swiper-button-prev.swiper-button-white, .swiper-button-next.swiper-button-white {
        --swiper-navigation-color: #ffffff;
        color: #f1b605;
    }

    @media(max-width: 500px){
        .container, .container-fluid, .container-sm, .container-md, .container-lg, .container-xl {
            width: 93%;
            padding-right: 15px;
            padding-left: 15px;
            margin-right: auto;
            margin-left: auto;
        }
    }
</style>
