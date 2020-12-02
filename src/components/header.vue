<template>
    <fixed-header :threshold="100">
        <header class="header">
        <div class="container-grid">
            <nav class="main-nav">
                <div class="menu-btn" :class="{ open:menuOpen }" @click="menuOpenshow">
                    <div class="menu-btn-burger"></div>
                </div>

                <div class="logo">
                    <h2>logo</h2>
                </div>
                <ul class="main-menu" :class="{ show:mobileMenu }">
                    <li id="register-btn-mobile">
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
                                            <img class="pt-1 mr-2" src="../../public/images/honey-compressor.jpg" alt="">
                                        </div>
                                        <div class="title-search-ajax">
                                            <p>عسل بهارنارنج ده کیلویی</p>
                                        </div>
                                    </div>
                                    <div class="items-search-ajax">
                                        <div class="img-search-ajax">
                                            <img class="pt-1 mr-2" :src="require('../../public/images/honey-compressor.jpg')" alt="">
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
                        <button class="btn-register-system">ورود</button>
                        <button class="btn-register-system">ثبت نام</button>
                    </li>
                </ul>
            </nav>

        </div>
        </header>
    </fixed-header>
  
</template>

<script>
import FixedHeader from 'vue-fixed-header'
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
            if(!this.menuOpen){
                this.menuOpen = true;
            }
            else{
                this.menuOpen = false;
            }

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
        FixedHeader
    }

}
</script>

<style scoped>
    .header.vue-fixed-header--isFixed {
        position: fixed;
        left: 0;
        top: 0;
        padding-left: 3px;
        width: 100vw;
        border-bottom: #d67100 solid 3px;
        transition: .3s all;
        background: #fbba00;
    }
</style>
