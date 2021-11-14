<template>
    <div id="app" class="font-sans text-gray-700 bg-white dark:bg-dark-900
        dark:text-dark-200 min-h-screen">
        <div v-if="showAppHeader">
            <AppHeader />
        </div>
        <div v-else>
            <div class="flex w-full p-3 border-b fixed top-0 z-40 bg-white dark:bg-dark-900
                dark:border-dark-700">
                <button @click.stop="$router.go(-1)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1
                            1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1
                            1 0 010 1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="mx-auto max-w-screen-lg">
            <div class="mx-10" :class="[showAppHeader ? 'py-20 sm:pb-4' : 'pt-14 pb-4']">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import Database from '@/storage/storageIdb';

export default {
    name: 'App',
    components: {
        AppHeader,
    },
    data() {
        return {
            theme: 'default',
            objectStoreSetting: process.env.VUE_APP_OBJECT_STORE_SETTING,
        };
    },
    created() {
        this.getTheme();
        Event.on('swOffline', console.log('offline on'));
    },
    destroyed() {
        Event.off('swOffline', console.log('offline off'));
    },
    computed: {
        showAppHeader() {
            const urls = ['Home', 'Favorite', 'Setting', 'About'];
            return urls.includes(this.$route.name);
        },
    },
    methods: {
        darkMode() {
            if (this.theme === 'dark' || (this.theme === 'default' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
        async getTheme() {
            const idbTheme = await Database.getData(this.objectStoreSetting, 'theme');
            if (idbTheme) {
                this.theme = idbTheme.value;
            }
            this.darkMode();
        },
    },
};
</script>
