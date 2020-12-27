<template>
<br><br><br><br><br>
  <div class="container">
    <div class="bg-product">
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
                <input v-model="numberProduct" type="text" inputmode="numeric" placeholder="تعداد" />
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
                <li>هزینه ارسال: <span>رایگان!</span></li>
                <li>تخفیف: <span>0</span></li>
                <li>جمع کل: <span class="text-danger">{{ price }}</span> <small class="text-danger">تومان</small></li>
              </ul>
            </div>
            <button class="btn-add-to-cart-productPage ">افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
      
      <div class="d-bb">
        <div class="price-for-mobile">
          <div class="price-mobile-version">
            <li>قیمت: <span>150,000</span> <small>تومان</small></li>
          </div>
          
          <div class="number__container">
            <button @click="delNumber" class="decrement"><i class="far fa-minus"></i></button>
            <input v-model="numberProduct" type="text" inputmode="numeric" placeholder="تعداد" />
            <button @click="addNumber" class="increment"><i class="far fa-plus"></i></button>
          </div>
        </div>
      </div>
      
      
    </div>
    
        
    <div class="foo-product-page">
      <div class="tab-foo-product-page">
        <ul>
          <li class="" @click.prevent="activetab=1" :class="[ activetab === 1 ? 'active' : '' ]"><a href="#"><i class="far fa-book fa-lg"></i>&nbsp;&nbsp;توضیخات</a></li>
          <li @click.prevent="activetab=2" :class="[ activetab === 2 ? 'active' : '' ]"><a href="#"><i class="far fa-comments-alt fa-lg"></i>&nbsp;&nbsp;نظر کاربران</a></li>
        </ul>
      </div>
      <div class="description-product-page" v-if="activetab == 1">
        <div class="items-description">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non a alias provident doloremque laboriosam nihil, nulla quisquam sequi labore perferendis explicabo consequatur sunt. Molestias voluptates placeat consequuntur, fugiat dolores asperiores!</p>
          <br><br><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non a alias provident doloremque laboriosam nihil, nulla quisquam sequi labore perferendis explicabo consequatur sunt. Molestias voluptates placeat consequuntur, fugiat dolores asperiores!</p>
          <br><br><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non a alias provident doloremque laboriosam nihil, nulla quisquam sequi labore perferendis explicabo consequatur sunt. Molestias voluptates placeat consequuntur, fugiat dolores asperiores!</p>
          <br><br><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non a alias provident doloremque laboriosam nihil, nulla quisquam sequi labore perferendis explicabo consequatur sunt. Molestias voluptates placeat consequuntur, fugiat dolores asperiores!</p>
          <br><br><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non a alias provident doloremque laboriosam nihil, nulla quisquam sequi labore perferendis explicabo consequatur sunt. Molestias voluptates placeat consequuntur, fugiat dolores asperiores!</p>
          <br><br><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non a alias provident doloremque laboriosam nihil, nulla quisquam sequi labore perferendis explicabo consequatur sunt. Molestias voluptates placeat consequuntur, fugiat dolores asperiores!</p>
        </div>
      </div>
      <div class="comments-user" v-if="activetab == 2">
        <ul id="comments-list" class="comments-list">










          <li v-for="userComment in userComments" :key="userComment.id">
            <div class="comment-main-level" >
              <!-- Avatar -->
              <div class="comment-avatar" style="margin: 0 0 30px 0;"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_1_zps8e1c80cd.jpg" alt=""></div>
              <!-- Contenedor del Comentario -->
              <div class="comment-message">
                <div class="comment-user-name">
                  <h5>{{ userComment.name }}</h5>
                </div>
                <div class="comment-text">
                  <p>{{ userComment.message }}</p>
                </div>
                <div class="reply-to-comment">
                  <a href="" @click.prevent="openDropComent=!openDropComent">پاسخ به نظر</a>
                </div>
                <div class="relpy-message-box" v-if="openDropComent">
                  <form class="inout-box" action="">
                    <div class="user-info-input">
                      <input class="form-control" placeholder="نام" type="text" name="" id="">
                      <input class="form-control" placeholder="ایمیل" type="text" name="" id="">
                    </div>
                    <div class="message-box">
                      <textarea name="" id="" placeholder="پاسخ خود را بنویسید..." class="form-control" cols="30" rows="10"></textarea>
                    </div>
                    <button class="btn btn-primary" style="margin: 10px 20px;">ارسال</button>
                  </form>
                </div>
              </div>
            </div>

            <!-- Respuestas de los comentarios -->
            <ul class="comments-list reply-list">
              <li v-for="replyUserComment in replyUserComments" :key="replyUserComment.id">
                <!-- Avatar -->
                <div class="comment-avatar"><img src="http://i9.photobucket.com/albums/a88/creaticode/avatar_2_zps7de12f8b.jpg" alt=""></div>
                <!-- Contenedor del Comentario -->
                <div class="reply-comment-message">
                  <div class="comment-user-name">
                    <h5>{{ replyUserComment.name }}</h5>
                  </div>
                  <div class="comment-text">
                    <p>
                      {{ replyUserComment.message }}
                    </p>
                  </div>
                  <div class="reply-to-comment">
                    <a href="" @click.prevent="openDropComentReply=!openDropComentReply">پاسخ به نظر</a>
                  </div>
                  <div class="relpy-message-box" v-if="openDropComentReply">
                    <form class="inout-box" action="">
                      <div class="user-info-input">
                        <input class="form-control" placeholder="نام" type="text" name="" id="">
                        <input class="form-control" placeholder="ایمیل" type="text" name="" id="">
                      </div>
                      <div class="message-box">
                        <textarea name="" id="" placeholder="پاسخ خود را بنویسید..." class="form-control" cols="30" rows="10"></textarea>
                      </div>
                      <button class="btn btn-primary" style="margin: 10px 20px;">ارسال</button>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </li>

          
        </ul>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data(){
    return {
      openDropComent: false,
      openDropComentReply: false,
      userComments: [
        { id: 1,  name: "میلاد محمدی", message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای  ." },
        { id: 2,  name: "میلاد محمدی", message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای  ." },
      ],

      replyUserComments: [
        { id: 1, name: "میلاد محمدی", message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای  ."},
        { id: 2, name: "میلاد محمدی", message: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای  ."}
      ],

      numberProduct : 1,
      activetab: 1,
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
      this.price -= this.price
      if (this.numberProduct == 0){
        this.numberProduct = 1
      }
      if (this.numberProduct < 1) {
        this.numberProduct = 1
      }
    }
  }
}
</script>

<style scoped>
   .active{
    border-top: 3px solid #c40000;
  }
</style>