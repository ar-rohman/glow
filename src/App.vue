<template>
    <div id="app" class="font-sans text-gray-700 bg-white dark:bg-dark-900
        dark:text-dark-200 min-h-screen">
        <Alert group="indexed-db" />
        <alert group="swUpdate" position="bottom-right"></alert>
        <alert group="swOffline" position="top-right"></alert>
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
import i18n from '@/plugins/i18n';

export default {
    name: 'App',
    components: {
        AppHeader,
    },
    data() {
        return {
            theme: 'default',
            objectStoreSetting: process.env.VUE_APP_OBJECT_STORE_SETTING,
            isOnline: navigator.onLine,
        };
    },
    created() {
        this.getTheme();
        this.getLanguage();
        document.addEventListener('swUpdated', this.updateAvailable, { once: true });
    },
    mounted() {
        window.addEventListener('online', this.isOnlineMode);
        window.addEventListener('offline', this.isOnlineMode);
        this.isOnlineMode();
    },
    beforeDestroy() {
        window.removeEventListener('online', this.isOnlineMode);
        window.removeEventListener('offline', this.isOnlineMode);
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
        async getLanguage() {
            const idbLanguage = await Database.getData(this.objectStoreSetting, 'language');
            if (idbLanguage) {
                i18n.locale = idbLanguage.value;
            }
        },
        updateAvailable() {
            this.$alert({
                group: 'swUpdate',
                duration: -1,
                closeButton: true,
                title: `
                    <p class="font-normal pr-4">
                        New content is available, please refresh to load it.
                    </p>
                `,
                text: `
                    <div class="flex justify-center mt-4">
                        <button class="w-full inline-flex justify-center rounded-md border border-transparent
                            shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 sm:w-auto
                            sm:text-sm dark:focus:ring-offset-dark-900"
                            onclick="window.location.reload()">
                            Refresh
                        </button>
                    </div>
                `,
            });
        },
        isOnlineMode() {
            this.isOnline = navigator.onLine;
            if (this.isOnline) {
                this.$alert({
                    group: 'swOffline',
                    clean: true,
                });
            } else {
                this.$alert({
                    group: 'swOffline',
                    duration: -1,
                    closeButton: true,
                    type: 'warning',
                    title: 'You are offline',
                    text: 'Some features may not working properly, please check your internet connection.',
                });
            }
        },
    },
};
</script>
