<template>
    <header class="flex justify-between items-center gap-x-8 w-full p-3 border-b fixed top-0 z-40
        bg-white dark:bg-dark-900 dark:border-dark-700">
        <div class="md:ml-6 flex-none">
            <img src="../assets/images/glow-text.png" alt="Global Weather" width="95" height="40">
        </div>
        <div class="w-full min-w-min max-w-sm">
            <SearchInput />
        </div>
        <NavMenu />
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
