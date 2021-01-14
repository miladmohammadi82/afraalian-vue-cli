<template>

<header-section />

<div class="container container-cart-page">
    

    <div class="contact-form-box">
      <div class="item-mored-niaz-forPay">
        <div class="addres-girande-box">
          
         
            <div class="title-contact-page">
                <h5>تماس با فلانی</h5>
            </div>
            
            <div class="contact-form-filds ">
                <form action="" class="row"> 
                    <div class="form-group col-lg-6">
                        <label for="">نام کاربری</label>
                        <input type="text" class="mt-2 form-control" placeholder="نام کاربری" name="" id="">
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="">موضوع</label>
                        <input type="text" class="mt-2 form-control" placeholder="موضوع" name="" id="">
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="">ایمیل</label>
                        <input type="email" class="mt-2 form-control" placeholder="ایمیل" name="" id="">
                    </div>
                    <div class="form-group col-lg-6">
                        <label for="">تلفن تماس</label>
                        <input type="text" class="mt-2 form-control" placeholder="تلفن تماس" name="" id="">
                    </div>

                    <div class="form-group col-lg-12 ">
                        <label for="">متن پیام</label>
                        <textarea class="mt-2 form-control textarea-cantact-page" placeholder="متن پیام خود را بنویسید ..." name="" id="" cols="30" rows="10"></textarea>
                    </div>

                    <div class="btn-save-info-edit-user">
                        <div class="btn btn-primary">ارسال</div>
                    </div>
                </form>
            </div>
          
        </div>

        
        <div class="addres-contact-page">
            <h5><i class="far fa-map-signs fa-3x"></i>آدرس</h5>
            <div class="addres-box-contact-page pt-4 row">

                <div class="addres-section-cotact-page col-lg-6 col-md-6 d-flex justify-content-center">
                    <p>
                        گیلان، صومعه سرا، گوراب زرمیخ، سه راهی طتف، نرسیده به مسجد
                    </p>
                </div>
                <div class="mt-sm-4 map-addres-section-cotact-page col-lg-6 col-md-6 d-flex justify-content-center">
                    <div class="map-box-addres"></div>
                </div>


            </div>
        </div>


        <div class="router-contact-this-web">
            <h5>راه های ارتباط باما</h5>
            <div class="router-contact-items">
                <ul>
                    <li class="col-lg-4">
                        <div class="icon-box-contact-page">
                            <i class="fas fa-phone-alt fa-2x"></i>
                        </div>
                        <div class="title-contact-page">
                            <h6>تماس بگیرید</h6>
                            <small>021-4541521</small>
                        </div>
                    </li>
                    
                    <li class="col-lg-4">
                        <div class="icon-box-contact-page">
                            <i class="far fa-at fa-2x"></i>
                        </div>
                        <div class="title-contact-page">
                            <h6>ایمیل</h6>
                            <small>info@afraalian.com</small>
                        </div>
                    </li>
                    <li class="col-lg-4">
                        <div class="icon-box-contact-page">
                            <i class="far fa-clock fa-2x"></i>
                        </div>
                        <div class="title-contact-page">
                            <h6>ساعت کاری</h6>
                            <small>۲۴ ساعت شبانه‌روز پاسخگوی شما هستیم</small>
                        </div>
                    </li>
                </ul>
            </div>
                
            
        </div>
      </div>
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

    }
},


  components: {
    headerSection,
    footerSection,
  }
}
</script>

<style>

</style>