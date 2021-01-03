<template>
  <div class="container container-cart-page">
    <div class="title-page-cart">
      <h4 class="text-center">سبد خرید من</h4>
      <small style="font-size: 12px;">2 محصول اضافه شد</small>
    </div>
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
          <td>{{ productCart.image }}</td>
          <td>{{ productCart.title }}</td>
          <td>{{ productCart.priceVahed }}</td>
          <td>
            <div class="number__container">
              <button @click="delNumber" class="decrement"><i class="far fa-minus"></i></button>
              <input v-model="numberProduct" type="text" inputmode="numeric" placeholder="تعداد" />
              <button @click="addNumber" class="increment"><i class="far fa-plus"></i></button>
            </div>
          </td>
          <td><i class="far fa-times fa-2x text-danger" style="cursor: pointer;"></i></td>
          <td>{{ productCart.priceMajmoh }}</td>
        </tr>
      </tbody>
    </table>
    <div class="items-cart-page">
      <div class="item-mored-niaz-forPay">
        <div class="code-takfif">
          <span style="font-size: 15px;" @click="showCodeTakfifBox=!showCodeTakfifBox">کد تخفیف دارید ؟</span>
          <div :class="{ showTacfifBox:!showCodeTakfifBox, 'code-takfif-box':showCodeTakfifBox }">
            <input type="text" placeholder="درج کد تخفیف" >
            <button class="btn btn-dark">اعمال</button>
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

  
</template>

<script>
export default {
  data(){
    return{
      showCodeTakfifBox: true,
      productCarts:[
        { image:"عکس", title: "عسل کاکوتی ممتاز 400 گرمی", priceVahed: "150,000 تومان", priceMajmoh: "150,000 تومان" },
        { image:"عکس", title: "عسل کاکوتی ممتاز 400 گرمی", priceVahed: "150,000 تومان", priceMajmoh: "150,000 تومان" },
      ] 
    }
  }

}
</script>

<style>

</style>