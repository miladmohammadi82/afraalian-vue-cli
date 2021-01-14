<template>
<header-section />


  <div class="">


    <div class="container container-cart-page">
      <div class="title-page-cart">
        <div class="title-page-cart-child">
          <h4><i class="fal fa-shopping-bag fa-lg"></i>&nbsp;سبد خرید</h4>
          
        </div>
        
        <small style="font-size: 12px;">2 محصول اضافه شد</small>
      </div>
      <div class="table-box-cart-page">
        <table class="content-table">
          <thead>
            <tr>
              <th>محصول</th>
              <th>توضیحات</th>
              <th>قسمت واحد</th>
              <th>تعداد</th>
              <th>حذف</th>
              <th>مجموع</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="productCart in productCarts" :key="productCart.id">
              <td><h4>محصول : </h4>&nbsp;{{ productCart.image }}</td>
              <td><h4>توضیحات : </h4>&nbsp;{{ productCart.title }}</td>
              <td><h4>قیمت واحد : </h4>&nbsp;{{ productCart.priceVahed }}</td>
              <td>
                <h4>تعداد : </h4>&nbsp;
                <div class="number__container">
                  <button @click="delNumber" class="decrement"><i class="far fa-minus"></i></button>
                  <input v-model="numberProduct" type="text" inputmode="numeric" placeholder="تعداد" />
                  <button @click="addNumber" class="increment"><i class="far fa-plus"></i></button>
                </div>
              </td>
              <td>
                <h4>حذف : </h4>&nbsp;
                <i class="far fa-times fa-2x text-danger" style="cursor: pointer;"></i>
              </td>
              <td><h4>مجموع : </h4>&nbsp;{{ productCart.priceMajmoh }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <div class="items-cart-page">
        <div class="item-mored-niaz-forPay">
          <div class="addres-girande-box">
            <div class="code-takfif">
              <span style="font-size: 15px;" @click="showCodeTakfifBox=!showCodeTakfifBox">کد تخفیف دارید ؟</span>
              <div :class="{ showTacfifBox:!showCodeTakfifBox, 'code-takfif-box':showCodeTakfifBox }">
                <input type="text" placeholder="درج کد تخفیف" >
                <button class="btn btn-dark">اعمال</button>
              </div>
            </div>
          
          
            <ul>
              <h5>مشخصات گیرنده</h5>
              <li><i class="fas fa-map-marker-alt"></i>&nbsp;آدرس گیرنده : <span>گیلان</span></li>
              <li><i class="fas fa-user"></i>&nbsp;نام گیرنده : <span>میلاد محمدی</span></li>
              <li><i class="fas fa-phone"></i>&nbsp;شماره تماس گیرنده : <span>02151526523</span></li>
              <li><a href="#">ویرایش اطلاعات&nbsp;<i class="far fa-chevron-left"></i></a></li>
            </ul>
          </div>
          
          <div class="nahve-pay">
            <h5>شیوه پرداخت</h5>
            <div class="py-interneti">
              <label for="myRadioPay" class="Radio-pay">
                <input type="radio" name="myRadioPay" id="myRadioPay" class="radio__inputPay">
                
                <div class="radio__radio-pay"></div>
                <img src="../../assets/svgs/1019611.svg" alt="">
                <h5>پرداخت اینترنتی</h5>
                
              </label>
            </div>
            <div class="py-mahal">
              <label for="myRadioPay2" class="Radio-pay">
                <input type="radio" name="myRadioPay" id="myRadioPay2" class="radio__inputPay2">
                
                <div class="radio__radio-pay2"></div>
                <img src="../../assets/svgs/1019607.svg" alt="">
                <h5>پرداخت در محل</h5>
                
              </label>
            </div>
          </div>
        </div>
        <div class="faraiand-pay">
          <ul>
            <li>
              <span class="count-product-cart-page">قیمت محصول</span>
              <span class="price-number-cart-page">
                150,000
                <span class="currency-cart-page">تومان</span>
              </span>
            </li>
            <li>
              <span class="count-product-cart-page">جمع</span>
              <span class="price-number-cart-page">
                150,000
                <span class="currency-cart-page">تومان</span>
              </span>
            </li>
            <li>
              <span class="count-product-cart-page">هزینه ارسال</span>
              <span class="price-number-cart-page">
                رایگان!
              </span>
            </li>
            <li>
              <span class="count-product-cart-page">مبلغ قابل پرداخت</span>
              <span class="price-number-cart-page">
                150,000
                <span class="currency-cart-page">تومان</span>
              </span>
            </li>
            <li>
              <button class="btn btn-danger w-100">پرداخت نهایی</button>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="btn-pay-nahaeCart-page-box">
      <button class="btn-pay-nahaeCart-page">پرداخت نهایی</button>
    </div>
  </div>
  
<footer-section />
</template>



<script>
import headerSection from '../header';
import footerSection from '../footer';
export default {
  data(){
    return{
      showCodeTakfifBox: true,
      productCarts:[
        { image:"عکس", title: "عسل کاکوتی ممتاز 400 گرمی", priceVahed: "150,000 تومان", priceMajmoh: "150,000 تومان" },
        { image:"عکس", title: "عسل کاکوتی ممتاز 400 گرمی", priceVahed: "150,000 تومان", priceMajmoh: "150,000 تومان" },
      ] 
    }
  },

  mounted () {
    let sideBar = document.querySelector(".faraiand-pay");
    let stickySideBar = sideBar.offsetTop;

    let header = document.querySelector("header");
    let sticky = header.offsetTop;
    window.onscroll = ()=> {

      if (window.pageYOffset > stickySideBar) {
        sideBar.classList.add("sticky-sidebar");
      }    
      else {
        sideBar.classList.remove("sticky-sidebar");
      }

      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } 
        
      else {
        header.classList.remove("sticky");
      }
    }
  },

  components: {
    headerSection,
    footerSection,
  }
}
</script>

<style scoped>
.sticky-sidebar{
  position: sticky;
  top: 15%;
  left: 5%;
  height: 282px;
  border-radius: 10px;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -ms-border-radius: 10px;
  -o-border-radius: 10px;
  box-shadow: 0px 0px 6px -1px #b77600;
}

.sticky{
  background: #FFC736;
  position: fixed;
  border-bottom: 3px solid #ff6d00;
}

.title-page-cart-child{
  border-bottom: 3px solid #c4c4c4;
  color: #e99f00;
  display: block;
}
.title-page-cart-child h4{
  padding-bottom: 10px;
    border-bottom: 3px solid #e97c00;
    display: inline-block;
    color: #e97c00;
    font-weight: 700;
    margin-bottom: -3px;
}
</style>