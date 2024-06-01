import {createRouter,
    createWebHistory,
    // createMemoryHistory,
    // createWebHashHistory,
} from 'vue-router'

import MSite from '../pages/MSite/MSite.vue';
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
// const MSite=()=> import('../pages/MSite/MSite.vue')
// const Order=()=> import('../pages/Order/Order.vue')
// const Profile=()=> import('../pages/Profile/Profile.vue')
// const Search=()=> import('../pages/Search/Search.vue')

export default createRouter({
    history:createWebHistory(),
    routes:[
        {
            path:'/msite',
            component:MSite
        },
        {
            path:'/order',
            component:Order
        },
        {
            path:'/profile',
            component:Profile
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect:'/msite'
        },
    ]
})

