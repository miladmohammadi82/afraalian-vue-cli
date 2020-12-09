<template>
    
        <header class="header" id="header">
        <div class="container">
            <nav class="main-nav" >
                <div class="menu-btn" :class="{ open:menuOpen }" @click="menuOpenshow">
                    <div class="menu-btn-burger"></div>
                </div>

                <div class="logo">
                    <h2>logo</h2>
                </div>
                <ul class="main-menu" :class="{ show:mobileMenu }">
                    <li class="register-btn-mobile">
                        <button class="btn-register-system"><p>ورود</p></button>
                        <button class="btn-register-system"><p>ثبت نام</p></button>
                    </li>

                    <li class="nav-link"><a href="#" class="a-nav-link active">خانه</a></li>

                    <li class="nav-link"><a href="#" class="a-nav-link">محصولات ما <i class="fal fa-angle-down"></i></a>
                        <div class="dropdown">
                            <ul>
                                <li class="dropdown-link"><a href="">عسل</a></li>
                                <li class="dropdown-link"><a href="">بره موم</a></li>
                                <li class="dropdown-link"><a href="">گرده گل</a></li>
                                <li class="dropdown-link"><a href="">ژل رویال</a></li>
                                <li class="dropdown-link"><a href=""></a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-link"><a href="#" class="a-nav-link">برنج</a></li>
                    <li class="nav-link"><a href="#" class="a-nav-link">مطالب</a></li>
                    <li class="nav-link"><a href="#" class="a-nav-link">درباره ما</a></li>
                    <li class="nav-link"><a href="#" class="a-nav-link">تماس باما</a></li>
                </ul>


                

                <ul class="right-menu">
                    <div>
                        <li class="pl-3">
                            <a href="#"><i class="fal fa-search" :class="{ 'fal fa-search-minus':searchBox }" @click.prevent="addSearchBox"></i></a>
                        </li>

                        <div class="searchbox" :class="{ showSearchbox:searchBox }">
                            <form action="" >
                                <input class="form-control" type="text" placeholder="جوستجو...">
                                <div class="product-search-ajax">
                                    <div class="items-search-ajax">
                                        <div class="img-search-ajax">
                                            <img class="pt-1 mr-2" src="../assets/honey-compressor.jpg" alt="">
                                        </div>
                                        <div class="title-search-ajax">
                                            <p>عسل بهارنارنج ده کیلویی</p>
                                        </div>
                                    </div>
                                    <div class="items-search-ajax">
                                        <div class="img-search-ajax">
                                            <img class="pt-1 mr-2" src="../assets/honey-compressor.jpg" alt="">
                                        </div>
                                        <div class="title-search-ajax">
                                            <p>عسل بهارنارنج ده کیلویی</p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <li>
                        <a href="#">
                            <i class="fal fa-shopping-bag"></i>
                        </a>
                        <div class="conter-shopping-cart"><span>0</span></div>
                    </li>
                    <li>
                        <button class="btn-register-system" style="margin-left: 5px;">ورود</button>
                        <button class="btn-register-system">ثبت نام</button>
                    </li>
                </ul>
            </nav>

            
        </div>
            
            <!-- Start menu mobile -->


            <div class="header-mobile">

                <div class="header-menu">
                    <h3 class="text-center">منو</h3>
                </div>

                <div class="serch-box">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search this blog">
                    <div class="input-group-append">
                        
                    <button class="btn btn-secondary" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </div>

                <ul class="nav-mobile">
                    <li class="nav-link-mobile"><a href="#">آیتم 1</a></li>
                    <li class="nav-link-mobile"><a href="#">آیتم 2</a></li>
                    <li class="nav-link-mobile"><a href="#">آیتم 3</a></li>
                    <li class="nav-link-mobile"><a href="#">آیتم 4</a></li>
                    <li class="nav-link-mobile"><a href="#">آیتم 5</a></li>
                </ul>


            </div>

            <div class="igron"></div>
            <!-- END menu mobile -->
        </header>

        
  
</template>

<script>
export default {
    
    data(){
        return{
            menuOpen: false,
            mobileMenu: false,

            searchBox: false,

            natayejSearch: false,
        }
    },
    methods: {
        menuOpenshow(){
            if(!this.mobileMenu){
                this.mobileMenu = true;
            }
            else{
                this.mobileMenu = false;
            }
        },
        addSearchBox(){
            if(!this.searchBox){
                this.searchBox = true;
            }
            else{
                this.searchBox = false;
            }
        },

        
    },

    components: {
    },

    mounted () {
        let header = document.querySelector("header");
        let sticky = header.offsetTop;

        window.onscroll = ()=> {
            if(window.pageYOffset > 300){
                if (window.pageYOffset > sticky) {
                    header.classList.add("sticky");
                }  
            }
            else {
                header.classList.remove("sticky");
            }
        }
    }

}
</script>

<style scoped>
    .sticky{
        background: #ffb700;
        position: fixed;
        border-bottom: 3px solid #ff6d00;
    }
    
    .header{
        z-index: 100000;
        transition: all 500ms;
        padding-left: 10px;
    }

    
</style>
