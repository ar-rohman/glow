import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '@/views/Search.vue'),
    },
    {
        path: '/setting',
        name: 'Setting',
        component: () => import(/* webpackChunkName: "setting" */ '@/views/Setting.vue'),
    },
    {
        path: '/detail',
        name: 'Detail',
        component: () => import(/* webpackChunkName: "detail" */ '@/views/Detail.vue'),
    },
    {
        path: '/hourly',
        name: 'Hourly',
        component: () => import(/* webpackChunkName: "hourly" */ '@/views/Hourly.vue'),
    },
    {
        path: '/daily',
        name: 'Daily',
        component: () => import(/* webpackChunkName: "daily" */ '@/views/Daily.vue'),
    },
    {
        path: '/favorite',
        name: 'Favorite',
        component: () => import(/* webpackChunkName: "favorite" */ '@/views/Favorite.vue'),
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "favorite" */ '@/components/ErrorPage.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;
