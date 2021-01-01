<template>
  <div class="container container-cart-page">
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
  </div>
</template>

<script>
export default {
  data(){
    return{
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