<template>
    <main class="main-site">
        <section class="banner-arias" id="banner-aria">
            <div class="container">
                <div class="swiper-container img p-0 m-0 container">
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


        <!-- Start Slider product -->
         <section id="top-sale">
            <div class="container py-5">
                <h4>
                    <span>محصولات ما</span>
                </h4>
                <!-- owl-carousel -->
                <div class="swiper-container product-slider">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="product in products" :key="product.id">
                            <div class="product">
                                <a href="#"><img :src="product.img" alt=""
                                                 class="img-fluid"></a>
                                <div class="title-product mt-2">
                                    <h6>{{product.title}}</h6>
                                    <div class="price py-3">
                                        <p>تومان</p>&nbsp;<span>{{ product.price }}</span>
                                    </div>
                                    <div class="btn-shoping-card">
                                        <button class="btn-register-system" style="width: 110px;"><i
                                                class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>                  
                <!-- owl-carousel -->
            </div>
        </section>
        <!-- End Slider product -->



        <!-- Start tab product -->




        <section class="tab-section">
            <div class="tabs">
                <ul>
                    <li @click.prevent="activetab=1" :class="[ activetab === 1 ? 'active-tab' : '' ]"><a href="#">عسل آویشن</a></li>
                    <li @click.prevent="activetab=2" :class="[ activetab === 2 ? 'active-tab' : '' ]"><a href="#">عسل بهار نارنج</a></li>
                    <li @click.prevent="activetab=3" :class="[ activetab === 3 ? 'active-tab' : '' ]"><a href="#">عسل گون</a></li>
                </ul>
            </div>

            <div class="contents container">
                <div v-if="activetab === 1">
                    <div class="items-product">
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="activetab === 2">
                    <div class="items-product">
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
                <div v-if="activetab === 3">
                   <div class="items-product">
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        <div class="product">
                            <a href="#"><img src="../assets/image-product/download.jpg" alt=""
                                                class="img-fluid w-100"></a>
                            <div class="title-product mt-2">
                                <h6>یطرزتشس</h6>
                                <div class="price py-3">
                                    <p>تومان</p>&nbsp;<span>110.000</span>
                                </div>
                                <div class="btn-shoping-card">
                                    <button class="btn-register-system" style="width: 110px;"><i
                                            class="far fa-plus"></i>&nbsp;&nbsp;<small>افزودن به سبد</small></button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
    
            </div>
        </section>
       <!-- END tab product -->

       <!-- Start About section -->


        <section class="about-section">
            <h2>کمی درباره فلانی</h2>
            <div class="items-about">
                <div class="container-fluid dd">
                    <div class="item-about1">
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                            <br>
                            <br>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    <div class="item-about2">
                        <h1>video</h1>
                    </div>
                </div>
                
            </div>
        </section>
       <!-- END About section -->


       <!-- Start section blog -->
        <section class="blog">
            <div class="container">
                <div class="title-blogsection">
                    <h1 class="text-center">آخرین مطالب</h1>
                </div>


                <div class="blogs-items">
                        <a href="" v-for="blog in blogs" :key="blog.id">
                            <div class="blog-item">
                                <img :src="blog.img" class="w-100" alt="">
                                <div class="title-blog-item p-3">
                                    <p>{{ blog.title }}</p>
                                </div>
                                <button class="w-100 btn-blog-item">ادامه مطلب</button>
                            </div>
                        </a>
                    
                </div>
                <div class="text-center">
                    <button class="button-blog">مشاهده همه مطالب&nbsp;&nbsp;<i class="fa fa-chevron-left"></i></button>
                </div>
            </div>
        </section>
        <!-- End section blog -->

        
        <footer-vue></footer-vue>
        <back-to-top></back-to-top>
    </main>
</template>

<script>
import footerVue from './footer.vue'
import BackToTop from './inden/back-to-top.vue'
export default{
    data(){
        return{
            activetab: 1,
            images: [
                { slider: require('../assets/slider/banner1.jpg'), alt: "honey-banner1" },
                { slider: require('../assets/slider/banner2.jpg'), alt: "honey-banner2" },
                { slider: require('../assets/slider/banner3.jpg'), alt: "honey-banner3" },
            ],

            products:[
                { img: require('../assets/image-product/download.jpg'), title: "عسل آویشن 5 کیلویی", price: '150,000' },
                { img: require('../assets/image-product/download.jpg'), title: "عسل آویشن 5 کیلویی", price: '150,000' },
                { img: require('../assets/image-product/download.jpg'), title: "عسل آویشن 5 کیلویی", price: '150,000' },
                { img: require('../assets/image-product/download.jpg'), title: "عسل آویشن 5 کیلویی", price: '150,000' },
                { img: require('../assets/image-product/download.jpg'), title: "عسل آویشن 5 کیلویی", price: '150,000' },
                { img: require('../assets/image-product/download.jpg'), title: "عسل آویشن 5 کیلویی", price: '150,000' },
                { img: require('../assets/image-product/download.jpg'), title: "عسل آویشن 5 کیلویی", price: '150,000' },
                { img: require('../assets/image-product/download.jpg'), title: "عسل آویشن 5 کیلویی", price: '150,000' },
            ],

            blogs: [
                { img: require('../assets/layares-of-atmosphere.jpg'), title: "خسوف چیست ؟ | به زبان ساده و جامع" },
                { img: require('../assets/layares-of-atmosphere.jpg'), title: "خسوف چیست ؟ | به زبان ساده و جامع" },
                { img: require('../assets/layares-of-atmosphere.jpg'), title: "خسوف چیست ؟ | به زبان ساده و جامع" },
                { img: require('../assets/layares-of-atmosphere.jpg'), title: "خسوف چیست ؟ | به زبان ساده و جامع" },
                { img: require('../assets/layares-of-atmosphere.jpg'), title: "خسوف چیست ؟ | به زبان ساده و جامع" },
                { img: require('../assets/layares-of-atmosphere.jpg'), title: "خسوف چیست ؟ | به زبان ساده و جامع" },
                { img: require('../assets/layares-of-atmosphere.jpg'), title: "خسوف چیست ؟ | به زبان ساده و جامع" },
                { img: require('../assets/layares-of-atmosphere.jpg'), title: "خسوف چیست ؟ | به زبان ساده و جامع" },
            ]
        }
    },

    components: {
        BackToTop,
        footerVue,
    }

    
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

    .product-slider {
      width: 100%;
      height: 100%;
    }

    .product-slider a img{
        width: 200px;
    }

    .product-slider {
      text-align: center;
      font-size: 18px;
      background: #fff;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    display: flex;
    justify-content: center;
    }

    .swiper-slide {
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        display: flex;
        transition-property: transform;
        justify-content: center;
    }

    .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
        margin: 0 4px;
        background: #bd8d00;
    }

    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
        bottom: -5px;
        left: 0;
        width: 100%;
    }

    .items-about{
        width: 100%;
        height: auto;
        padding: 0 0 40px 0;
        background:url(../assets/bg-about.jpg) center no-repeat fixed;
    }
</style>
