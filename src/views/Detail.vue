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
                    Weather forecast for {{ city | titleCase }}
                </p>
                <p class="text-xs">
                   Last updated {{ longFullDate(timestamp) }}
                </p>
            </div>
            <div class="bg-white mb-8">
                <div class="flex justify-between mb-1">
                    <div class="font-bold">Hourly</div>
                    <div class="flex text-blue-500 hover:text-blue-700 text-sm cursor-pointer">
                        <p>See all</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586
                                10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1
                                0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <horizontal-scroll reference="hourlyWeather">
                    <div class="px-6 py-4 shadow-md border border-gray-100
                        overflow-hidden rounded-lg min-w-min"
                        v-for="hourly in weatherData.hourly" :key="hourly.dt">
                        <div class="flex flex-col items-center space-y-4 w-44">
                            <div class="flex justify-between whitespace-nowrap w-full text-sm">
                                <p>{{ shortDate(hourly.dt) }}</p>
                                <p>{{ time(hourly.dt) }}</p>
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
                                    {{ hourly.temp.toFixed() }}&deg;
                                </div>
                                <div class="flex flex-col">
                                    <div class="text-xs text-gray-500">Real Feel</div>
                                    <div>{{ hourly.feels_like.toFixed() }}&deg;</div>
                                </div>
                            </div>
                            <div class="flex justify-between w-full">
                                <div class="flex flex-col">
                                    <div class="text-xs text-gray-500">Wind Speed</div>
                                    <div>{{ kmph(hourly.wind_speed) }}</div>
                                </div>
                                <div class="flex flex-col">
                                    <div class="text-xs text-gray-500">Humidity</div>
                                    <div>{{ hourly.humidity }}%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </horizontal-scroll>
            </div>
            <div class="bg-white">
                <div class="flex justify-between mb-1">
                    <div class="font-bold">Daily</div>
                    <div class="flex text-blue-500 hover:text-blue-700 text-sm cursor-pointer">
                        <p>See all</p>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586
                                10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1
                                0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <horizontal-scroll reference="dailyWeather">
                    <div class="px-6 py-4 shadow-md border border-gray-100
                        overflow-hidden rounded-lg"
                        v-for="daily in weatherData.daily" :key="daily.dt">
                        <div class="flex flex-col items-center space-y-4">
                            <div class="whitespace-nowrap">
                                {{ threeLetterDay(daily.dt) }}
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
                                    {{ daily.temp.max.toFixed() }}&deg;
                                </div>
                                <div>
                                    {{ daily.temp.min.toFixed() }}&deg;
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
import { mapGetters } from 'vuex';
import ErrorPage from '@/components/ErrorPage.vue';
import DetailSkeleton from '@/components/skeleton/DetailSkeleton.vue';
import HorizontalScroll from '@/components/HorizontalScroll.vue';

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
        };
    },
    created() {
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
        async getData() {
            await this.axios
                .get(`onecall?lat=${this.latitude}&lon=${this.longitude}&exclude=current,minutely,alerts&appid=${process.env.VUE_APP_API_KEY}&units=metric`)
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
                    const { data } = error.response;
                    if (data.cod === '404') {
                        this.errorData = {
                            cod: 404,
                            message: `Sorry, We can't found city with ${this.keyword} keyword, please try another keywords.`,
                        };
                    } else {
                        this.errorData = data;
                    }
                });
        },
    },
};
</script>
