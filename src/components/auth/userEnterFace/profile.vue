<template>
<header-section />
  <div class="content-page">
    <div class="continer-profile-page">
      <div class="sidebar-profile">
        <div class="user-profile">
          <div class="image-profile">
            <img src="../../../assets/d41d8cd98f00b204e9800998ecf8427e-min.jpg" alt="">
          </div>
          <ul class="infos-user">
            <li><h4>میلاد محمدی</h4></li>
            <li><small>091165565212</small></li>
            <li><router-link to="/profile/edit-password"><i class="far fa-pencil"></i>&nbsp;تغییر رمز</router-link></li>
          </ul>
        </div>
        <div class="list-user-prodile-section">
          <ul class="list-user-prodile-ul">
            <li><router-link to="/profile/dashboard"><i class="far fa-user fa-lg"></i>&nbsp;&nbsp;پیشخوان</router-link></li>
            <li><router-link to="/profile/my-order"><i class="far fa-box-open fa-lg"></i>&nbsp;&nbsp;سفارش های من</router-link></li>
            <li><router-link to="/profile/likes"><i class="far fa-heart fa-lg"></i>&nbsp;&nbsp;علاقه مندی ها</router-link></li>
            <li><router-link to="/profile/comments"><i class="far fa-comments fa-lg"></i>&nbsp;&nbsp;نظرات</router-link></li>
            <li><router-link to="/profile/addres-user"><i class="far fa-route fa-lg"></i>&nbsp;&nbsp;نشانی</router-link></li>
            <li><a href="#" @click.prevent="logout"><i class="far fa-sign-out-alt fa-lg"></i>&nbsp;&nbsp;خروج از حساب</a></li>
          </ul>
        </div>
      </div>
      <div class="content-profile-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
<footer-section />

</template>

<script>
import User from '../../../apis/user'

import headerSection from '../../../components/header';
import footerSection from '../../../components/footer';
export default {

  
data() {
  return{

  }
},
  
  methods: {
    logout(){
      User.logout().then(()=> {
        localStorage.removeItem("token")
        this.$router.push('/')
      })
    }
  },

  
  components: {
    headerSection,
    footerSection,
  }
}
</script>

<style scoped>

@media(max-width: 571px){
  
}

.router-link-active{
  color: #eb5600 !important;
}



</style>