import {createRouter,
    createWebHistory,
    // createMemoryHistory,
    // createWebHashHistory,
} from 'vue-router'

import MSite from '../pages/MSite/MSite.vue';
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from "../pages/Login/Login.vue";
// const MSite=()=> import('../pages/MSite/MSite.vue')
// const Order=()=> import('../pages/Order/Order.vue')
// const Profile=()=> import('../pages/Profile/Profile.vue')
// const Search=()=> import('../pages/Search/Search.vue')

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/msite',
            component:MSite,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/order',
            component:Order,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/profile',
            component:Profile,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/search',
            component:Search,
            meta:{
                showFooter:true
            }
        },
        {
            path:'/',
            redirect:'/msite',
        },
        {
            path:'/login',
            component:Login
        },
    ]
})

