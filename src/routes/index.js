import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

Vue.use(Router);
import globalHelper from "@/globalHelper";

import Home      from '@/components/Home'
import Login     from '@/components/auth/Login'
import Register  from '@/components/auth/Register'
import Header    from '@/components/Header';

import Product         from '@/components/product/Index'
import ProductCreate   from '@/components/product/Create'
import ProductEdit     from '@/components/product/Edit'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Home",
            components: {
                'default': Home,
                'header': Header,
            },
        },
        {
            path: "/login",
            name: "Login",
            components: {
                'default': Login,
                'header': Header,
            },
        },
        {
            path: "/register",
            name: "Register",
            components: {
                'default': Register,
                'header': Header,
            },
        },
        {
            path: "/products",
            name: "Product",
            components: {
                'default': Product,
                'header': Header,
            },
            meta: { requiresAuth: true }
        },
        {
            path: "/product/create",
            name: "ProductCreate",
            components: {
                'default': ProductCreate,
                'header': Header,
            },
            meta: { requiresAuth: true }
        },
        {
            path: "/product/edit/:id",
            name: "ProductEdit",
            components: {
                'default': ProductEdit,
                'header': Header,
            },
            meta: { requiresAuth: true }
        },



    ],

});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (globalHelper.authToken() === null) {
            next({
                path: '/login',
            })
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router;

