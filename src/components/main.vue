<template>
    <main class="main-site">
        <section class="banner-arias" id="banner-aria">
            <div class="container">

                <div class="swiper-container p-0 m-0 container">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide"><img class="w-100" src="../assets/slider/banner1.jpg" alt=""></div>
                        <div class="swiper-slide"><img class="w-100" src="../assets/slider/banner2.jpg" alt=""></div>
                        <div class="swiper-slide"><img class="w-100" src="../assets/slider/banner3.jpg" alt=""></div>
                    </div>
                    
                    
                    <div class="swiper-pagination swiper-pagination-white"></div>
                    
                    
                    <div class="swiper-button-next swiper-button-white"></div>
                    <div class="swiper-button-prev swiper-button-white"></div>
                </div>


            </div>
        </section>
    </main>

</template>

<script>

export default{
    
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
