<template>
  <div class="container">
      <table class="content-table">
      <thead>
        <tr>
          <th>تصویر</th>
          <th>نام محصول</th>
          <th>قیمت محصول</th>
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
            <h4>تعداد : </h4>&nbsp;{{ productCart. number }}
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
</template>

<script>
export default {
    data(){
        return{
            showCodeTakfifBox: true,
            productCarts:[
                { image:"عکس", number: 1, title: "عسل کاکوتی ممتاز 400 گرمی", priceVahed: "150,000 تومان", priceMajmoh: "150,000 تومان" },
                { image:"عکس", number: 1, title: "عسل کاکوتی ممتاز 400 گرمی", priceVahed: "150,000 تومان", priceMajmoh: "150,000 تومان" },
            ] 
        }
    },
}
</script>

<style>

</style>