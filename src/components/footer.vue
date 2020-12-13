<template>
  <!-- Start Footer -->
    <div class="footer">
        <div class="container">
            <div class="items-main-footer">
                <section class="item1">
                    <p>مطالب پربازدید</p>
                    <ul>
                        <li>
                            <a href="">
                                <i class="fal fa-chevron-left"></i>
                                عسل آویشن و خواص آن
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <i class="fal fa-chevron-left"></i>
                                عسل آویشن و خواص آن
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <i class="fal fa-chevron-left"></i>
                                عسل آویشن و خواص آن
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <i class="fal fa-chevron-left"></i>
                                عسل آویشن و خواص آن
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fal fa-chevron-left"></i>
                                عسل آویشن و خواص آن
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <i class="fal fa-chevron-left"></i>
                                عسل آویشن و خواص آن
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fal fa-chevron-left"></i>
                                عسل آویشن و خواص آن
                            </a>
                        </li>
                    </ul>
                </section>
                

                <section class="item2">
                    <p>باما همراه شوید</p>
                    <ul>
                        <li>
                            <a href="" >
                                <i class="fal fa-chevron-left"></i>
                                تماس باما
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <i class="fal fa-chevron-left"></i>
                                درباره ما
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <i class="fal fa-chevron-left"></i>
                                پشتیبانی
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i class="fal fa-chevron-left"></i>
                                وبلاگ
                            </a>
                        </li>
                    </ul>
                </section>

                <section class="namads">
                    <p>نماد ها</p>
                    <ul>
                        <li>
                            <a href="" >
                                <img src="../assets/logo1.png" class="w-75" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <img src="../assets/logo2.png" class="w-75" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <img src="../assets/nashr.png" class="w-75" alt="">
                            </a>
                        </li>
                    </ul>
                </section>
            </div>
            

            <!-- Start footer for mobile -->


            <section class="footer-drop-down">
                <div class="menu-doropdon" @click="activeDrop1=!activeDrop1">
                    <div class="title-drop-name">مطالب پربازدید</div>
                    <i :class="{ 'far fa-plus':!activeDrop1,'far fa-minus':activeDrop1 }"></i>
                </div>
                <transition name="slide">
                    <div class="dropdown-footer" v-if="activeDrop1">
                        <ul class="menu-items">
                            <li><a href="#">عسل آویشن و خواص آن</a></li>
                            <li><a href="#">عسل آویشن و خواص آن</a></li>
                            <li><a href="#">عسل آویشن و خواص آن</a></li>
                            <li><a href="#">عسل آویشن و خواص آن</a></li>
                            <li><a href="#">عسل آویشن و خواص آن</a></li>
                            <li><a href="#">عسل آویشن و خواص آن</a></li>
                        </ul>
                    </div>
                </transition>

                <div class="menu-doropdon" @click="activeDrop2=!activeDrop2">
                    <div class="title-drop-name">باما همراه شوید</div>
                    <i :class="{ 'far fa-plus':!activeDrop2,'far fa-minus':activeDrop2 }"></i>
                </div>
                <transition name="slide">
                    <div class="dropdown-footer" v-if="activeDrop2">
                        <ul class="menu-items">
                            <li><a href="#">تماس باما</a></li>
                            <li><a href="#">درباره ما</a></li>
                            <li><a href="#">پشتیبانی</a></li>
                            <li><a href="#">وبلاگ</a></li>
                        </ul>
                    </div>
                </transition>
                
                <section class="namads">
                    <p>نماد ها</p>
                    <ul>
                        <li>
                            <a href="" >
                                <img src="../assets/logo1.png" class="w-75" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <img src="../assets/logo2.png" class="w-75" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="" >
                                <img src="../assets/nashr.png" class="w-75" alt="">
                            </a>
                        </li>
                    </ul>
                </section>
                

            </section>


            <!-- END footer for mobile -->

        </div>
    </div>
    <div class="copy-right-footer">
        
        <div class="items-copy-right-footer">
            <div class="container">
                <div class="copy-right-title">
                    <small>&copy;  تمامی حقوق این وبسایت متعلق به شرکت چهل گیاه  است</small>
                </div>
                <div class="pm-resans">
                    <ul class="social-network">
                        <li class="telegram-plane"><a href="#"><i class="fab fa-telegram-plane fa-lg"></i></a></li>
                        <li class="instagram"><a href="#"><i class="fab fa-instagram fa-lg"></i></a></li>
                        <li class="youtube"><a href="#"><i class="fab fa-youtube fa-lg"></i></a></li>
                        <li class="twitter"><a href="#"><i class="fab fa-twitter fa-lg"></i></a></li>
                        <li class="facebook-square"><a href="#"><i class="fab fa-facebook-square fa-lg"></i></a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    </div>
    <!-- End Footer -->


</template>

<script>
export default {
    data(){
        return{
            activeDrop1: false,
            activeDrop2: false,
            activeDrop3: false,
        }
    }
}
</script>

<style scoped>

.dropdown-footer{
  transform-origin: top;
  transition: transform .4s ease-in-out;
  overflow: hidden;
}
  
.slide-enter, .slide-leave-to {
  transform: scaleY(0);
}

.active-drop{
    background: #000;
}
</style>