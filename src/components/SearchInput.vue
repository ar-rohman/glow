<template>
    <form>
        <div class="relative text-gray-400 focus-within:text-gray-600">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                <div class="p-1 focus:outline-none focus:shadow-outline">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round"
                        stroke-linejoin="round" stroke-width="2"
                        viewBox="0 0 24 24" class="w-5 h-5">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
            </span>
            <input type="text" name="q" placeholder="Search..."
                class="appearance-none border border-gray-300 w-full py-2 px-10 text-gray-300
                placeholder-gray-400 shadow-sm rounded-md text-base focus:outline-none focus:ring-2
                focus:ring-blue-700 focus:border-transparent focus:text-gray-900" autocomplete="off"
                @keyup="isEmpty" v-model="searchInput" @keyup.enter="submitSearch">
            <span class="absolute inset-y-0 right-0 flex items-center px-2"
                v-if="showClearSign">
                <button
                    @click="clearInput"
                    class="zp-1 focus:outline-none focus:shadow-outline">
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
        },
    },
};
</script>
