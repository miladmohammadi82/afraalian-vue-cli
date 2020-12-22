<template>
<br><br><br><br><br>
  <div class="container">
    <div class="product-page-content">
      <div class="gallery-product">
        <div class="gallery-product-item">
          <div class="gallery-product-image" v-for="galleryHeadImg in galleryHeadImgs" :key="galleryHeadImg.id">
            <img :src="galleryHeadImg.img"  alt="">
          </div>
        </div>
        <ul class="gallery-product-items">
          <li class="js-product-thumb-img" v-for="galleryEndImg in galleryEndImgs" :key="galleryEndImg.id">
            <div class="thumb-wrapper">
              <img :src="galleryEndImg.img" alt="">
            </div>
          </li>
        </ul>
      </div>
      <div class=""></div>
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
  }
}
</script>

<style scoped>
  
</style>