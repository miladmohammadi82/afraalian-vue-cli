<template>
<br><br><br><br><br>
  <div class="container">
    <div class="product-page-content">
      <div class="gallery-product">
        <div class="gallery-product-item">
          <div class="gallery-product-image">
            <img src="../../assets/image-product/download.jpg" ref="itemImg" alt="">
          </div>
        </div>
        <ul class="gallery-product-items">
          <li class="js-product-thumb-img" v-for="galleryEndImg in galleryEndImgs" :key="galleryEndImg.id">
            <div class="thumb-wrapper">
              <img :src="galleryEndImg.img" ref="itemsImg" @click="editImg" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class="info-product">
        <div class="items-main-product-page">
          <div class="title">
            <h4 class="text-product">عسل آویشن 5 کیلویی</h4>
          </div>
          <div class="servisess-product-page">
            <ul>
              <li><img src="../../assets/image-servisess/free-send.svg" alt=""></li>
              <li><img src="../../assets/image-servisess/rerurn-product.svg" alt=""></li>
              <li><img src="../../assets/image-servisess/support-24.svg" alt=""></li>
              <li><img src="../../assets/image-servisess/tarxk-time.svg" alt=""></li>
            </ul>
          </div>
          <div class="next-section">
            <h5>ویژگی محصول:</h5>
            <ul>
              <li>ساکارز: <span>2 </span>درصد</li>
              <li>نوع عسل: <span>آویشن</span></li>
              <li>محل برداشت: <span>گیلان</span></li>
            </ul>
          </div>
          <div class="count-number">
            <div class="number__container">
              <button @click="delNumber" class="decrement"><i class="far fa-minus"></i></button>
              <input v-model="numberProduct" max="20" min="1" type="number" inputmode="numeric" placeholder="تعداد" />
              <button @click="addNumber" class="increment"><i class="far fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-product-page-section d-flex justify-content-center align-items-center">
        <div class="cart-product-page">
          <div class="title">
            <h4 class="text-product">عسل آویشن 5 کیلویی</h4>
          </div>
          <div class="main-cart-product">
            <ul>
              <li>قیمت: <span>150,000</span> <small>تومان</small></li>
              <li>تخفیف: <span>0</span></li>
              <li>جمع کل: <span class="text-danger">{{ price }}</span> <small class="text-danger">تومان</small></li>
            </ul>

            
          </div>
          <button class="btn-add-to-cart-productPage ">افزودن به سبد خرید</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      numberProduct : 1,
      price: 150000,
      galleryHeadImgs: [
        { id: 1, img: require("../../assets/image-product/download.jpg") },
        { id: 2, img: require("../../assets/image-product/عسل-آویشن-ممتاز-800-گرمی.jpg") },
        { id: 3, img: require("../../assets/image-product/گرده-گل-مخلوط-150-گرمی.jpg") },
      ],

      galleryEndImgs: [
        { id: 1, img: require("../../assets/image-product/download.jpg") },
        { id: 2, img: require("../../assets/image-product/عسل-آویشن-ممتاز-800-گرمی.jpg") },
        { id: 3, img: require("../../assets/image-product/گرده-گل-مخلوط-150-گرمی.jpg") },
      ]
    }
  },


  methods: {
    editImg(){
      this.$refs.itemImg = this.$refs.itemsImg
    },
    addNumber(){
      this.numberProduct++
      this.price += this.price 
      if (this.numberProduct > 20) {
        this.numberProduct = 20
      }
    },
    delNumber(){
      this.numberProduct--
      if (this.numberProduct < 1) {
        this.numberProduct = 1
      }
    }
  }
}
</script>

<style scoped>
  
</style>