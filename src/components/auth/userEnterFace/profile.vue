<template>
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
            <li><a href="#"><i class="far fa-pencil"></i>&nbsp;تغییر رمز</a></li>
          </ul>
        </div>
        <div class="list-user-prodile-section">
          <ul class="list-user-prodile-ul">
            <li><router-link to="/profile/dashboard"><i class="far fa-user fa-lg"></i>&nbsp;&nbsp;پیشخوان</router-link></li>
            <li><router-link to="/profile/my-order"><i class="far fa-box-open fa-lg"></i>&nbsp;&nbsp;سفارش های من</router-link></li>
            <li><router-link to="/profile/likes"><i class="far fa-heart fa-lg"></i>&nbsp;&nbsp;علاقه مندی ها</router-link></li>
            <li><router-link to="/profile/comments"><i class="far fa-comments fa-lg"></i>&nbsp;&nbsp;نظرات</router-link></li>
            <li><router-link to="/profile/addres-user"><i class="far fa-route fa-lg"></i>&nbsp;&nbsp;نشانی</router-link></li>
            <li><a><i class="far fa-sign-out-alt fa-lg"></i>&nbsp;&nbsp;خروج از حساب</a></li>
          </ul>
        </div>
      </div>
      <div class="content-profile-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    let sideBarUserPanel = document.querySelector(".sidebar-profile");
    let stickySideBarUserPanel = sideBarUserPanel.offsetTop;

    let header = document.querySelector("header");
    let sticky = header.offsetTop;

    
    window.onscroll = ()=> {
      if (window.pageYOffset > stickySideBarUserPanel) {
       
        sideBarUserPanel.classList.add("sticky-sidebar-panel-user");
      }    
      else {
        sideBarUserPanel.classList.remove("sticky-sidebar-panel-user");
      }



      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } 
        
      else {
        header.classList.remove("sticky");
      }
    }
  }
}
</script>

<style scoped>
.sticky-sidebar-panel-user{
  position: sticky;
  top: 11%;
  left: 5%;
}

@media (max-width: 571px){
  .sticky-sidebar-panel-user{
    position: inherit;
    top: 11%;
    left: 5%;
    
  }
}
</style>