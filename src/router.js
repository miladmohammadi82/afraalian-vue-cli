import { createWebHistory, createRouter } from "vue-router";

import productPage from './components/views/productPage.vue'
import main from './components/main.vue'

const routes = [
    { path: "/", component: main },
    { path: "/product", component: productPage },
]


const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;