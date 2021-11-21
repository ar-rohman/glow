<template>
    <div>
        <Modal :city="city" v-if="showModal"
            @closeModal="showModal = false"
            @deleteLocation="deleteFavorited" />
        <div class="mb-4">
            <p class="text-lg font-bold">Favorite Locations</p>
        </div>
        <div>
            <div class="shadow-md border border-gray-100 overflow-hidden rounded-lg min-w-min
                dark:border-dark-700 dark:shadow-dark-md">
                <div class="divide-y dark:divide-dark-700" v-if="cities.length > 0">
                    <div class="hover:bg-blue-50 dark:hover:bg-dark-800"
                        v-for="(city, index) in cities" :key="index">
                        <div class="flex items-center justify-between py-4 px-6">
                            <div class="cursor-pointer w-full hover:text-blue-700"
                                @click="getCity(city)">
                                {{ city }}
                            </div>
                            <div class="ml-4">
                                <button class="bg-red-100 text-red-600 rounded-full p-2
                                    hover:bg-red-600 hover:text-white dark:text-dark-200
                                    dark:bg-red-600 dark:hover:bg-red-700
                                    focus:outline-none focus:ring-2
                                    focus:ring-offset-2 focus:ring-red-600
                                    dark:focus:ring-offset-dark-900"
                                            @click="modalConfirm(city)">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
                                            01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1
                                            1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-4 px-6" v-else>There are no favorite locations</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Modal from '@/components/Modal.vue';

export default {
    name: 'Favorite',
    components: {
        Modal,
    },
    data() {
        return {
            city: null,
            method: null,
            showModal: false,
        };
    },
    computed: {
        ...mapGetters({
            cities: 'favorite/favorite',
        }),
    },
    methods: {
        ...mapActions({
            removeFavorite: 'favorite/removeFavorite',
        }),
        deleteFavorited(city) {
            this.removeFavorite(city);
            this.showModal = false;
            this.$alert({
                type: 'success',
                title: 'Success!',
                text: `${city} removed from favorite`,
                group: 'indexed-db',
            });
        },
        modalConfirm(city) {
            this.city = city;
            this.showModal = true;
        },
        getCity(city) {
            this.$router.push({
                path: '/search',
                query: {
                    q: city,
                },
            });
        },
    },
};
</script>
