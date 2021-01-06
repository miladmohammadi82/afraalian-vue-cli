<template>
  <div class="container">
    <h5 style="color: #777;">سفارش های شما</h5>
    <table class="content-table">
        <thead>
            <tr>
            <th>تصویر</th>
            <th>نام محصول</th>
            <th>قیمت محصول</th>
            <th>تعداد</th>
            <th>وضعیت</th>
            <th></th>
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
                <h4>وضعیت : </h4>&nbsp;<span class="badge badge-primary">در حال پیگیری</span>
            </td>
            <td><h4>مجموع : </h4>&nbsp;<button type="button" class="btn btn-danger">لغو ارسال و بازگشت وجه</button></td>
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