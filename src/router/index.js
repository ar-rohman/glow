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
        path: '/not-found',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "not-found" */ '@/views/NotFound.vue'),
    },
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        next('/not-found');
    } else {
        next();
    }
});

export default router;
