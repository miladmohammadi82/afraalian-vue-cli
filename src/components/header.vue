<template>
   
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
                        <button class="btn-register-system">ورود</button>
                        <button class="btn-register-system">ثبت نام</button>
                    </li>
                </ul>
            </nav>

        </div>
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

    

.header{
    width: 100%;
    height: 70px;
    background: #ffe9af;
    z-index: 300015;
    position: absolute;
    box-shadow: 0 1px 10px rgba(0,0,0,.08);
    -webkit-box-shadow: 0 1px 10px rgba(0,0,0,.08);
    -moz-box-shadow: 0 1px 10px rgba(0,0,0,.08);
    -ms-box-shadow: 0 1px 10px rgba(0,0,0,.08);    
}


.main-nav{
    display: flex;
    align-items: center;
    height: 60px;
    justify-content: space-between;
    padding: 5px 0;
    font-size: 20px;
}

.main-nav .logo{
    width: 110px;
}

.main-nav ul{
    display: flex;
}

.main-nav ul.main-menu{
    flex: 1;
    margin-left: 20px;
}

.main-nav ul li{
    padding-right: 14px;
    margin: 0 0 0 4px;
}

.main-nav ul li a{
    padding-bottom: 2px;
    font-size: 14px;
}

.main-nav ul li a i{
    font-size: 25px;
}

.btn-register-system{
    border: none;
    background: #ff7900;
    width: 85px;
    height: 35px;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    justify-content: center;
    align-items: center;
    display: inline-flex;
}

/*start menu burger*/
.menu-btn{
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
}

.menu-btn .menu-btn-burger{
    width: 50px;
    height: 6px;
    background: #4e4e4e;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
}
.menu-btn-burger::before,
.menu-btn-burger::after{
    content: '';
    position: absolute;
    width: 50px;
    height: 6px;
    background: #4e4e4e;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    -webkit-transition: all 0.5s ease-in-out;
    -moz-transition: all 0.5s ease-in-out;
    -ms-transition: all 0.5s ease-in-out;
    -o-transition: all 0.5s ease-in-out;
}

.menu-btn-burger::before{
    transform: translateY(-16px);
}

.menu-btn-burger::after{
    transform: translateY(16px);
}

.menu-btn.open .menu-btn-burger{
    background: transparent;
}

.menu-btn.open .menu-btn-burger::before{
    transform: translateY(0) rotate(-45deg);
    background: #b40e12;
}

.menu-btn.open .menu-btn-burger::after{
    transform: translateY(0) rotate(45deg);
    background: #b40e12;
    -webkit-transform: translateY(0) rotate(45deg);
    -moz-transform: translateY(0) rotate(45deg);
    -ms-transform: translateY(0) rotate(45deg);
    -o-transform: translateY(0) rotate(45deg);
}

.menu-btn .menu-btn-burger{
    display: none;
}
.main-nav ul.main-menu li#register-btn-mobile{
    display: none;
}
.main-menu .search-mobile input{
    display: none;
}
.main-nav ul.main-menu li a i{
    font-size: 21px;
}

.nav-link{
    position: relative;
}

.dropdown{
    position: absolute;
    top: 100%;
    right: 0;
    padding-top: 20px;
    display: none;
    transition: .5s;
    z-index: 9999;
    transition:all .5s ;
    -webkit-transition:all .5s ;
    -moz-transition:all .5s ;
    -ms-transition:all .5s ;
    -o-transition:all .5s ;
}



.dropdown ul{
    display: flex;
    flex-direction: column;
    position: absolute;
    transition: .5s;
    padding-left: 20px;
    background:#fff;
    height: 136px;
    width: 116px;
    transition: .5s;
    z-index: 99999999999999;
    border-bottom: 2px solid #FF6D00;
    -webkit-box-shadow: 0px 0px 6px 0px #262626;
    box-shadow: 0px 3px 6px 0px #262626;
    
}



.dropdown-link a{
    display: flex;
    color: #fff;
}

.dropdown ul{
    display: flex;
    flex-direction: column;
    position: absolute;
    transition: .5s;
    padding-left: 20px;
}

.dropdown ul li{
    padding-top: 10px;
    transition: .5s;
    line-height: 20px;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -ms-transition: .5s;
    -o-transition: .5s;
}

.dropdown ul li a{
    color: #262626 !important;
}

.nav-link:hover .dropdown{
    transform: translate(0,0);
    pointer-events: auto;
    display: block;
    padding-top: 0;
}

.search-btn{
    border: none;
    cursor: pointer;
}

.search{
    margin-right: -153px;
    opacity: 0;
    pointer-events: none;
}

.search input{
    width: 153px;
    height: 40px;
}

.main-nav ul.main-menu .nav-link a.a-nav-link::before{
    content: "";
    position: absolute;
    right: 0;
    bottom: .5rem;
    background: #FF6D00;
    width: 78%;
    height: 2px;
    transform: scale(0);
    -webkit-transform: scale(0);
    -moz-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform-origin: right;
    transition: transform 500ms;
    -webkit-transition: transform 500ms;
    -moz-transition: transform 500ms;
    -ms-transition: transform 500ms;
    -o-transition: transform 500ms;
}

.main-nav ul.main-menu .nav-link a:hover::before{
    transform: scale(1);
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
}

.main-nav ul.main-menu .nav-link a:hover{
    color: #FF6D00;
}

.main-nav ul.main-menu .nav-link a.active::before,
.main-nav ul.main-menu .nav-link a.active{
    transform: scale(1);
    color: #FF6D00;
}

.right-menu a button:focus + li ul.search{
    opacity: 1;
}

.searchbox{
    min-width: 17%;
    text-align: center;
    height: auto;
    background: rgb(255 255 255);
    position: absolute;
    top: 71%;
    text-align: left;
    display: flex;
    border-bottom: 2px solid #ff7d1d;
    box-shadow: 0 0 3px 0px #262626;
    display: none;
    transition: all .2s ease-in-out;
    pointer-events: painted;
    -webkit-transition: all .2s ease-in-out;
    -moz-transition: all .2s ease-in-out;
    -ms-transition: all .2s ease-in-out;
    -o-transition: all .2s ease-in-out;
    z-index: 5;
}

.showSearchbox{
    opacity: 1;
    display: block;
}

.searchbox input{
    width: 91%;
    height: calc(60px - 1.25rem);
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    margin: 10px 10px;
}

.product-search-ajax .items-search-ajax .img-search-ajax{
    width: 50px;
}

.product-search-ajaxblur{
    display: none;
}

@media (max-width: 700px){
    .searchbox{
        margin: 0px -32% 0 0;
    }

}

@media (max-width: 1050px){
    .searchbox{
        margin: 0px -18% 0 0;
    }

}

.product-search-ajax .items-search-ajax{
    width: 100%;
    height: 60px;
    background: #ececec;
    border-bottom: 1px solid #b5b5b5;
}

.product-search-ajax .items-search-ajax .img-search-ajax img{
    border-radius: 8px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
}

.product-search-ajax .items-search-ajax div:last-child{
    margin: -34px 0 0 17px;
}

.product-search-ajax .items-search-ajax div:last-child p{
    font-size: 14px;
    color: #262626;
}

.conter-shopping-cart{
        display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-size: .625rem;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 10px;
    background: #FF6D00;
    border-radius: 20px;
    position: absolute;
    margin: -37px -9px 0 0;
    min-width: 14px;
    height: 14px;
    padding: 0px 0px 0;
    color: #fff;
}


</style>
