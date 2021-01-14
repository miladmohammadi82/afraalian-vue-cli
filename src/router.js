import { createWebHistory, createRouter } from "vue-router";

import productPage from './components/views/productPage.vue';
import main from './components/main.vue';
import cartPage from "./components/views/cartPage.vue";
import contactPage from "./components/views/contactPage.vue";
import aboutPage from "./components/views/aboutPage.vue";



// Auth Components
import registerPage from "./components/auth/register.vue";
import loginPage from "./components/auth/login.vue";
import profile from "./components/auth/userEnterFace/profile.vue";
import dashboard from "./components/auth/userEnterFace/page/dashboard.vue";
import myOrder from "./components/auth/userEnterFace/page/my-order.vue";
import likes from "./components/auth/userEnterFace/page/likes.vue";
import comments from "./components/auth/userEnterFace/page/comments.vue";
import addresUser from "./components/auth/userEnterFace/page/addres-user.vue";
import editPassword from "./components/auth/userEnterFace/page/edit-password.vue";
import profileInfoEdit from "./components/auth/userEnterFace/page/edit-your-profile-info.vue";


// Admin Components
import indexAdmin from "./components/admin/pages/index-page.vue"
import dashboardAdmin from "./components/admin/pages/routers/dashboard.vue"


const routes = [
    { path: "/", component: main },
    { path: "/product", component: productPage },
    { path: "/shoping-cart", component: cartPage },
    { path: "/contact-page", component: contactPage },
    { path: "/about-page", component: aboutPage },

    // Auth component
    { path: "/register", component: registerPage, meta: {guestOnly: true} },
    { path: "/login", component: loginPage, meta: {guestOnly: true} },
    { path: "/profile", component: profile, meta: {authOnly: true}, children:[
        { path: "dashboard", component: dashboard },
        { path: "my-order", component: myOrder },
        { path: "likes", component: likes },
        { path: "comments", component: comments },
        { path: "addres-user", component: addresUser },
        { path: "edit-password", component: editPassword },
        { path: "edit-profile", component: profileInfoEdit },
    ] },

    

    // Admin Components
    { path: "/admin",  component: indexAdmin, children: [
        { path: "dashboard", component: dashboardAdmin },
    ]}
]


const router = createRouter({
    history: createWebHistory(),
    routes
});

function isLoggedIn(){
    return localStorage.getItem("token");
}


router.beforeEach((to) => {
    // instead of having to check every route record with
    // to.matched.some(record => record.meta.requiresAuth)
    if (to.meta.authOnly && !isLoggedIn()) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      return {
        path: '/login',
        // save the location we were at to come back later
        query: { redirect: to.fullPath },
      }
    }

    else if (to.meta.guestOnly && isLoggedIn()) {
        return {
            path: '/',
            query: { redirect: to.fullPath },
        }
    }
  })

export default router;