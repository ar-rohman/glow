<template>
    <div>
        <div v-if="isLoadnig">
            <HomeSkeleton />
        </div>
        <div v-if="isError">
            <ErrorPage v-bind="errorData" />
        </div>
        <div v-if="weatherData">
            <div class="mb-4">
                <p class="text-lg font-bold">
                    {{ $t('detailPageTitle') }} {{ keyword | titleCase }}
                </p>
                <p class="text-sm">
                    {{ currentFullDate(language) }}
                </p>
                <p class="text-xs">
                    {{ $t('lastUpdated') }} {{ timeFromNow(weatherData.dt, language) }}
                </p>
            </div>
            <div class="flex justify-between mb-1">
                <div>
                    <button class="flex text-blue-500 hover:text-blue-700"
                        @click="removeFromFavorite" v-if="isFavorited">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
                                01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1
                                1 0 00-1 1v3M4 7h16" />
                        </svg>
                        <p class="text-sm ml-0.5">{{ $t('removeFavorite') }}</p>
                    </button>
                    <button class="flex text-blue-500 hover:text-blue-700"
                        @click="addToFavorite" v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1
                                1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                        <p class="text-sm ml-0.5">{{ $t('addFavorite') }}</p>
                    </button>
                </div>
                <div class="flex text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                    @click="moreDetail">
                    <p>{{ $t('moreDetails') }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586
                            10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1
                            0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    </div>
            </div>
            <div>
                <div class="flex flex-col sm:flex-row gap-y-10 sm:gap-x-10 mb-10">
                    <div class="px-6 py-4 shadow-md border border-gray-100 overflow-hidden
                        rounded-lg w-full sm:w-1/2 dark:border-dark-700 dark:shadow-dark-md">
                        <div class="flex justify-between">
                            <p>{{ weatherData.name }}</p>
                            <p>{{ weatherData.sys.country }}</p>
                        </div>
                        <div class="flex flex-col justify-center w-full">
                            <div class="flex justify-center h-24">
                                <img :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
                                    :alt="`${weatherData.weather[0].description}`"
                                    class="h-24 w-24">
                            </div>
                            <div class="mt-2 flex justify-center text-center">
                                <p>{{ weatherData.weather[0].description | titleCase }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between mt-10">
                            <div>
                                <p>{{ $t('feelLike') }}</p>
                                <p class="text-2xl tracking-tighter">
                                    {{ temperature(weatherData.main.feels_like, tempUnit) }}&deg;
                                </p>
                            </div>
                            <div class="text-6xl tracking-tighter">
                                <p>{{ temperature(weatherData.main.temp, tempUnit) }}&deg;</p>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 py-4 shadow-md border border-gray-100 overflow-hidden
                        rounded-lg w-full sm:w-1/2 dark:border-dark-700 dark:shadow-dark-md">
                        <div class="flex justify-between mb-3">
                            <div>
                                <p class="text-gray-400 text-xs">{{ $t('pressure') }}</p>
                                <p>{{ weatherData.main.pressure }} hPa</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">{{ $t('windSpeed') }}</p>
                                <p>{{ kmph(weatherData.wind.speed) }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between mb-3">
                            <div>
                                <p class="text-gray-400 text-xs">{{ $t('humidity') }}</p>
                                <p>{{ weatherData.main.humidity }}%</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">{{ $t('cloudiness') }}</p>
                                <p>{{ weatherData.clouds.all }}%</p>
                            </div>
                        </div>
                        <div class="flex justify-between mb-3">
                            <div>
                                <p class="text-gray-400 text-xs">{{ $t('visibility') }}</p>
                                <p>{{ mtokm(weatherData.visibility) }}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">{{ $t('timezone') }}</p>
                                <p>{{ timezone(weatherData.timezone) }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between mb-3">
                            <div>
                                <p class="text-gray-400 text-xs">{{ $t('sunrise') }}</p>
                                <p>{{ time(weatherData.sys.sunrise, weatherData.timezone) }}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">{{ $t('sunset') }} </p>
                                <p>{{ time(weatherData.sys.sunset, weatherData.timezone) }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div>
                                <p class="text-gray-400 text-xs">{{ $t('latitude') }}</p>
                                <p>{{ weatherData.coord.lat }}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">{{ $t('longitude') }}</p>
                                <p>{{ weatherData.coord.lon }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Database from '@/storage/storageIdb';
import ErrorPage from '@/components/ErrorPage.vue';
import HomeSkeleton from '@/components/skeleton/HomeSkeleton.vue';

export default {
    name: 'Search',
    components: {
        ErrorPage,
        HomeSkeleton,
    },
    data() {
        return {
            keyword: null,
            isLoadnig: true,
            isError: false,
            weatherData: null,
            errorData: null,
            tempUnit: 'celsius',
            objectStoreSetting: process.env.VUE_APP_OBJECT_STORE_SETTING,
            language: 'en',
        };
    },
    async created() {
        this.getTempUnit();
        this.getLanguage();
        this.keyword = this.$route.query.q;
        await this.getData();
    },
    computed: {
        ...mapGetters({
            cities: 'favorite/favorite',
        }),
        isFavorited() {
            return this.cities.includes(this.weatherData.name);
        },
    },
    watch: {
        '$route.query.q': {
            handler(value) {
                if (this.keyword !== value) {
                    if (value !== '') {
                        this.keyword = value;
                        this.getData();
                    }
                }
            },
        },
    },
    methods: {
        async getData() {
            await this.$axios(`weather?q=${this.keyword}`)
                .then((response) => {
                    const { data } = response;
                    this.weatherData = data;
                    this.isError = false;
                    this.isLoadnig = false;
                })
                .catch((error) => {
                    this.weatherData = null;
                    this.isError = true;
                    this.isLoadnig = false;
                    if (error.response) {
                        const { data } = error.response;
                        if (data.cod === '404') {
                            this.errorData = {
                                cod: 404,
                                message: `${this.$t('keywordNotFoud1')} "${this.keyword}", ${this.$t('keywordNotFoud2')}`,
                            };
                        } else {
                            this.errorData = data;
                        }
                    }
                });
        },
        ...mapActions({
            setCity: 'setCity',
            setLocation: 'location/set',
            setDate: 'setDate',
            addFavorite: 'favorite/addFavorite',
            removeFavorite: 'favorite/removeFavorite',
        }),
        moreDetail() {
            this.setLocation({
                lat: this.weatherData.coord.lat,
                lon: this.weatherData.coord.lon,
            });
            this.setCity(this.keyword);
            this.setDate(this.weatherData.dt);
            this.$router.push('/detail');
        },
        addToFavorite() {
            this.addFavorite(this.weatherData.name);
            this.$alert({
                type: 'success',
                title: this.$t('alertSuccess'),
                text: `${this.weatherData.name} ${this.$t('addFavoriteMsg')}`,
                group: 'indexed-db',
            });
        },
        removeFromFavorite() {
            this.removeFavorite(this.weatherData.name);
            this.$alert({
                type: 'success',
                title: this.$t('alertSuccess'),
                text: `${this.weatherData.name} ${this.$t('removeFavoriteMsg')}`,
                group: 'indexed-db',
            });
        },
        async getTempUnit() {
            const idbTemp = await Database.getData(this.objectStoreSetting, 'temperature');
            if (idbTemp) {
                this.tempUnit = idbTemp.value;
            }
        },
        async getLanguage() {
            const idbLocation = await Database.getData(this.objectStoreSetting, 'language');
            this.language = idbLocation.value;
        },
    },
};
</script>
