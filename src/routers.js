import HomeView from "./components/Home.vue";
import SignUp from "./components/SignUp.vue";
import LoginPage from "./components/Login.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes=[
    {
        name:'Home',
        component:HomeView,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/register'
    },
    {
        name:'Login',
        component:LoginPage,
        path:'/login'
    }
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

export default router