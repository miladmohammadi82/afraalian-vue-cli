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
                <ul class="main-menu">
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
                        
                    </li>
                    <li>
                        <button class="btn-register-system" style="margin-left: 5px;">ورود</button>
                        <button class="btn-register-system">ثبت نام</button>
                    </li>
                </ul>

                <div class="box-icon-user" :class="{ openUser:openMenuUser }" @click="showUserMenu">
                    <i class="far fa-user-circle fa-lg" style="color:#ff0800"></i>
                </div>
            </nav>

            
        </div>
            
            <!-- Start menu mobile -->


            <div class="header-mobile" :class="{ showMenu:mobileMenu }">

                <div class="header-menu">
                    <h3 class="text-center">منو</h3>
                </div>

                <div class="serch-box">
                    <!-- Another variation with a button -->
                    <div class="input-group">
                        <div class="input-group-append">
                            <button style="height: 32px;" class="btn btn-secondary" type="button">
                                <i class="fa fa-search"></i>
                            </button>
                        </div>
                        <input type="text" style="height: 18px;" class="form-control" placeholder="Search this blog">
                    </div>
                </div>

                <ul class="nav-mobile">
                    <li class="nav-link-mobile"><a href="#"><i class="far fa-home fa-lg"></i>&nbsp;خانه</a></li>
                    <li class="nav-link-mobile" @click.prevent="showDropdownMethod"><a href="#"><i class="far fa-boxes fa-lg"></i>&nbsp;محصولات ما</a><i class="far fa-chevron-down" :class="{ 'roterIcondropdoen':editIconDropdown }"></i>
                        <div class="dropdown-mobile" v-if="showDropdownMobile" :class="{ showDropdownMobile:showDropdownMenuMobile }">
                            <ul>
                                <li><a href="#">عسل آویشن</a></li>
                                <li><a href="#">عسل بهارنارنج</a></li>
                                <li><a href="#">عسل گون</a></li>
                                <li><a href="#">عسل افرا</a></li>
                                <li><a href="#">عسل کدو</a></li>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-link-mobile"><a href="#"><i class="fal fa-file-alt fa-lg"></i>&nbsp;مطالب</a></li>
                    <li class="nav-link-mobile"><a href="#"><i class="far fa-comment-exclamation fa-lg"></i>&nbsp;درباره ما</a></li>
                    <li class="nav-link-mobile"><a href="#"><i class="far fa-phone fa-lg"></i>&nbsp;تماس با ما</a></li>
                </ul>


            </div>

            <div :class="{ igron:showIgron }" @click="menuOpenshow"></div>
            <!-- END menu mobile -->


            <div class="menu-user" :class="{ 'user-show':showMenuUser }">
                <div class="content-user">
                    <div class="header1">
                        <h4 style="color: #fff" class="text-center">محیط کاربری</h4>
                    </div>

                    <div class="items-user">
                        <ul>
                            <li><a href="#"><i class="far fa-sign-in-alt fa-lg"></i>&nbsp;ورود</a></li>
                            <li><a href="#"><i class="far fa-user-plus fa-lg"></i>&nbsp;ثبت نام</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div :class="{'igrone-user-menu':showIgroneUser}" @click="showUserMenu"></div>
        </header>

        
  
</template>

<script>
export default {
    
    
    data(){
        return{
            menuOpen: false,
            mobileMenu: false,

            searchBox: false,
            showIgron: false,

            natayejSearch: false,
            showDropdownMobile: false,
            editIconDropdown: false,
            showMenuUser: false,
            showIgroneUser: false,
            openMenuUser:false,
        }
    },


    methods: {
        menuOpenshow(){
            if(!this.mobileMenu){
                this.mobileMenu = true;
            }else{
                this.mobileMenu = false;
            }

            if(!this.menuOpen){
                this.menuOpen = true;
            }else{
                this.menuOpen = false;
            }


            if (this.menuOpen) {
                this.showIgron = true
            }else{
                this.showIgron = false
            }


            if (this.menuOpen &&  this.mobileMenu) {
                this.showMenuUser = false;
                this.showIgroneUser = false;
            }
        },

        showDropdownMethod(){
            if(!this.showDropdownMobile){
                this.showDropdownMobile = true;
            }else{
                this.showDropdownMobile = false;
            }

            if (!this.editIconDropdown) {
                this.editIconDropdown = true
            }else{
                this.editIconDropdown = false
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

        showUserMenu(){
            if(!this.showMenuUser){
                this.showMenuUser = true;
                this.showIgroneUser = true;
            }else{
                this.showMenuUser = false;
                this.showIgroneUser = false;
            }


            if (!this.openMenuUser) {
                this.openMenuUser = true
            }else{
                this.openMenuUser = false
            }


            if (this.showMenuUser &&  this.showIgroneUser) {
                this.menuOpen = false;
                this.mobileMenu = false;
            }


        },
        
        
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

<style scoped >
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
    .btn-secondary {
        color: #fff;
        background-color: #ff6d00;
        border-color: #ff6d00;
    }
    
</style>
