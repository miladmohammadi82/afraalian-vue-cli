import { createWebHistory, createRouter } from "vue-router";

import productPage from './components/views/productPage.vue';
import main from './components/main.vue';
import cartPage from "./components/views/cartPage.vue";
import registerPage from "./components/auth/register.vue";
import loginPage from "./components/auth/login.vue";
import profile from "./components/auth/userEnterFace/profile.vue";


import dashboard from "./components/auth/userEnterFace/page/dashboard.vue";
import myOrder from "./components/auth/userEnterFace/page/my-order.vue";
import likes from "./components/auth/userEnterFace/page/likes.vue";
import comments from "./components/auth/userEnterFace/page/comments.vue";
import addresUser from "./components/auth/userEnterFace/page/addres-user.vue";
import editPassword from "./components/auth/userEnterFace/page/edit-password.vue";

const routes = [
    { path: "/", component: main },
    { path: "/product", component: productPage },
    { path: "/shoping-cart", component: cartPage },
    { path: "/register", component: registerPage },
    { path: "/login", component: loginPage },
    { path: "/profile", component: profile, children:[
        { path: "dashboard", component: dashboard },
        { path: "my-order", component: myOrder },
        { path: "likes", component: likes },
        { path: "comments", component: comments },
        { path: "addres-user", component: addresUser },
        { path: "edit-password", component: editPassword },
    ] },
]


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;