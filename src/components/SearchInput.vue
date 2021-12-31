<template>
    <form method="post">
        <div class="relative text-gray-300 focus-within:text-gray-700
            dark:focus-within:text-dark-200 dark:text-dark-400">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <div class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" class="w-5 h-5">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </span>
            <input type="text" :placeholder="$t('searchInputPlaceholder')" id="search"
                class="appearance-none border border-gray-300 w-full py-2 px-10 text-gray-300
                placeholder-gray-400 shadow-sm rounded-lg text-base focus:outline-none focus:ring-2
                focus:ring-blue-700 focus:border-transparent focus:text-gray-700 dark:bg-dark-900
                dark:focus:text-dark-200 dark:border-dark-700 dark:focus:border-transparent"
                autocomplete="off"
                v-model="searchInput" @keydown.enter="submitSearch" @keyup="isEmpty" >
            <span class="absolute inset-y-0 right-0 flex items-center px-2"
                v-if="showClearSign">
                <button
                    @click="clearInput"
                    class="focus:outline-none focus:shadow-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </span>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchInput',
    data() {
        return {
            showClearSign: false,
            searchInput: '',
            searchResult: [],
        };
    },
    methods: {
        isEmpty(event) {
            this.showClearSign = !!event.target.value;
        },
        clearInput(event) {
            event.preventDefault();
            this.searchInput = '';
            this.showClearSign = false;
        },
        submitSearch(event) {
            event.preventDefault();
            if (this.searchInput.length > 0) {
                this.$router.push({
                    path: '/search',
                    query: {
                        q: this.searchInput,
                    },
                })
                    // to catch if url is current location
                    // https://stackoverflow.com/questions/57837758/navigationduplicated-navigating-to-current-location-search-is-not-allowed
                    .catch(() => {});
                this.searchInput = '';
                event.target.blur();
                this.showClearSign = false;
            }
        },
    },
};
</script>
