<template>
    <div>
        <div v-if="isLoadnig">
            <DetailSkeleton />
        </div>
        <div v-if="isError">
            <ErrorPage v-bind="errorData" />
        </div>
        <div v-if="weatherData">
            <div class="mb-4">
                <p class="text-lg font-bold">
                    {{ $t('detailPageTitle') }} {{ city | titleCase }}
                </p>
                <p class="text-xs">
                   {{ $t('lastUpdated') }} {{ timeFromNow(timestamp, language) }}
                </p>
            </div>
            <div class="mb-8">
                <div class="flex justify-between mb-1">
                    <div class="font-bold">{{ $t('hourly') }}</div>
                    <div class="flex text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                        @click="hourlyDetail">
                        <p>{{ $t('moreDetails') }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586
                                10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1
                                0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <horizontal-scroll reference="hourlyWeather">
                    <div class="px-6 py-4 shadow-md border border-gray-100
                        overflow-hidden rounded-lg min-w-min dark:border-dark-700
                        dark:shadow-dark-md"
                        v-for="hourly in weatherData.hourly" :key="hourly.dt">
                        <div class="flex flex-col items-center space-y-4 w-44">
                            <div class="flex justify-between whitespace-nowrap w-full text-sm">
                                <p>{{ shortDate(hourly.dt, weatherData.timezone_offset) }}</p>
                                <p>{{ time(hourly.dt, weatherData.timezone_offset) }}</p>
                            </div>
                            <div class="flex justify-center h-24">
                                <img :src="`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`"
                                class="h-24 w-24"
                                :alt="`${hourly.weather[0].description}`" />
                            </div>
                            <div  class="text-center">
                                {{ hourly.weather[0].description | titleCase }}
                            </div>
                            <div class="flex justify-between w-full">
                                <div class="text-4xl tracking-tighter">
                                    {{ temperature(hourly.temp, tempUnit) }}&deg;
                                </div>
                                <div class="flex flex-col">
                                    <div class="text-xs text-gray-400">{{ $t('feelLike') }}</div>
                                    <div>{{ temperature(hourly.feels_like, tempUnit) }}&deg;</div>
                                </div>
                            </div>
                            <div class="flex justify-between w-full">
                                <div class="flex flex-col">
                                    <div class="text-xs text-gray-400">{{ $t('windSpeed') }}</div>
                                    <div>{{ kmph(hourly.wind_speed) }}</div>
                                </div>
                                <div class="flex flex-col">
                                    <div class="text-xs text-gray-400">{{ $t('humidity') }}</div>
                                    <div>{{ hourly.humidity }}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </horizontal-scroll>
            </div>
            <div>
                <div class="flex justify-between mb-1">
                    <div class="font-bold">{{ $t('daily') }}</div>
                    <div class="flex text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                        @click="dailyDetail">
                        <p>{{ $t('moreDetails') }}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586
                                10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1
                                0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <horizontal-scroll reference="dailyWeather">
                    <div class="px-6 py-4 shadow-md border border-gray-100
                        overflow-hidden rounded-lg min-w-min dark:border-dark-700
                        dark:shadow-dark-md"
                        v-for="daily in weatherData.daily" :key="daily.dt">
                        <div class="flex flex-col items-center space-y-4">
                            <div class="whitespace-nowrap">
                            {{ threeLetterDay(daily.dt, weatherData.timezone_offset, language) }}
                            </div>
                            <div class="flex justify-center h-24">
                                <img :src="`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`"
                                class="h-24 w-24"
                                :alt="`${daily.weather[0].description}`" />
                            </div>
                            <div class="text-center">
                                {{ daily.weather[0].description | titleCase }}
                            </div>
                            <div class="flex justify-between items-end w-full">
                                <div class="text-2xl tracking-tighter">
                                    {{ temperature(daily.temp.max, tempUnit) }}&deg;
                                </div>
                                <div>
                                    {{ temperature(daily.temp.min, tempUnit) }}&deg;
                                </div>
                            </div>
                        </div>
                    </div>
                </horizontal-scroll>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import ErrorPage from '@/components/ErrorPage.vue';
import DetailSkeleton from '@/components/skeleton/DetailSkeleton.vue';
import HorizontalScroll from '@/components/HorizontalScroll.vue';
import Database from '@/storage/storageIdb';

export default {
    name: 'Detail',
    components: {
        ErrorPage,
        DetailSkeleton,
        HorizontalScroll,
    },
    data() {
        return {
            isLoadnig: true,
            isError: false,
            weatherData: null,
            errorData: null,
            tempUnit: 'celsius',
            objectStoreSetting: process.env.VUE_APP_OBJECT_STORE_SETTING,
            language: 'en',
        };
    },
    created() {
        this.getTempUnit();
        this.getLanguage();
        this.isOnline();
        this.getData();
    },
    computed: {
        ...mapGetters({
            latitude: 'location/lat',
            longitude: 'location/lon',
            city: 'city',
            timestamp: 'timestamp',
        }),
    },
    methods: {
        isOnline() {
            window.addEventListener('online', () => {
                if (!this.weatherData) {
                    this.getData();
                }
            });
        },
        async getData() {
            const param = `onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=current,minutely,alerts`;
            await this.$axios(param)
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
            setHourly: 'weather/setHourly',
            setDaily: 'weather/setDaily',
            setTimeZone: 'setTimeZone',
        }),
        hourlyDetail() {
            this.setHourly(this.weatherData.hourly);
            this.setTimeZone(this.weatherData.timezone_offset);
            this.$router.push('/hourly');
        },
        dailyDetail() {
            this.setDaily(this.weatherData.daily);
            this.setTimeZone(this.weatherData.timezone_offset);
            this.$router.push('/daily');
        },
        async getTempUnit() {
            const idbTemp = await Database.getData(this.objectStoreSetting, 'temperature');
            if (idbTemp) {
                this.tempUnit = idbTemp.value;
            }
        },
        async getLanguage() {
            const idbLocation = await Database.getData(this.objectStoreSetting, 'language');
            if (idbLocation) this.language = idbLocation.value;
        },
    },
};
</script>
