import { createWebHistory, createRouter } from "vue-router";

import productPage from './components/views/productPage.vue';
import main from './components/main.vue';
import cartPage from "./components/views/cartPage.vue";
import registerPage from "./components/auth/register.vue"
const routes = [
    { path: "/", component: main },
    { path: "/product", component: productPage },
    { path: "/shoping-cart", component: cartPage },
    { path: "/register", component: registerPage },
]


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;