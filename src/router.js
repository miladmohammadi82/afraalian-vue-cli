import { createWebHistory, createRouter } from "vue-router";

import productPage from './components/views/productPage.vue';
import main from './components/main.vue';
import cartPage from "./components/views/cartPage.vue";
import registerPage from "./components/auth/register.vue"
import loginPage from "./components/auth/login.vue"
import profile from "./components/auth/userEnterFace/profile.vue"
const routes = [
    { path: "/", component: main },
    { path: "/product", component: productPage },
    { path: "/shoping-cart", component: cartPage },
    { path: "/register", component: registerPage },
    { path: "/login", component: loginPage },
    { path: "/profile", component: profile },
]


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;