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
            <h4>عسل آویشن 5 کیلویی</h4>
          </div>
          <div class="servisess-product-page">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
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
    }
  }
}
</script>

<style scoped>
  
</style>