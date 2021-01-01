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
        <tr>
          <td>عکس</td>
          <td>عسل کاکوتی ممتاز 400 گرمی</td>
          <td>150,000 تومان</td>
          <td>
            <div class="number__container">
              <button @click="delNumber" class="decrement"><i class="far fa-minus"></i></button>
              <input v-model="numberProduct" type="text" inputmode="numeric" placeholder="تعداد" />
              <button @click="addNumber" class="increment"><i class="far fa-plus"></i></button>
            </div>
          </td>
          <td><i class="far fa-times fa-2x text-danger" style="cursor: pointer;"></i></td>
          <td>150,000 تومان</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>