<template>
    <div id="app" class="font-sans text-gray-700">
        <div v-if="showAppHeader">
            <AppHeader />
        </div>
        <div v-else>
            <div class="flex w-full p-3 border-b fixed top-0 z-40 bg-white">
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
            <div class="mx-10" :class="[showAppHeader ? 'my-20 sm:mb-4' : 'mt-14 mb-4']">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
    },
    computed: {
        showAppHeader() {
            const urls = ['Home', 'Favorite', 'Setting', 'About'];
            return urls.includes(this.$route.name);
        },
    },
};
</script>
