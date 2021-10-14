<template>
    <header class="flex justify-between items-center w-full p-3 border-b fixed top-0 z-40
        bg-white dark:bg-dark-900 dark:border-dark-700">
        <div class="ml-6 mr-12 flex-none">
            <img src="../assets/images/glow-text.png" alt="Global Weather" width="95" height="40">
        </div>
        <div class="w-full min-w-min max-w-md sm:mx-12 mr-2">
            <SearchInput />
        </div>
        <div>
            <NavMenu />
        </div>
    </header>
</template>

<script>
import SearchInput from './SearchInput.vue';
import NavMenu from './NavMenu.vue';

export default {
    name: 'AppHeader',
    components: {
        SearchInput,
        NavMenu,
    },
};
</script>
