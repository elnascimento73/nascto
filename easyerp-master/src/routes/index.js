import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/Auth/Login'
import home from '../views/Home'

import Products from "../views/Cruds/Products";

Vue.use(Router);

let mainRouters = [
    {
        path:'/',
        name: 'home',
        component: home
    },
    {
        path:'/login',
        name: 'login',
        component: login
    },
    {
        path:'/produtos',
        name: 'login',
        component: Products
    },

]
let router =  new Router({
    mode: 'history',
    routes: mainRouters
});

export default router