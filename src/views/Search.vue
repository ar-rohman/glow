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
                    Weather forecast for {{ weatherData.name }}, {{ weatherData.sys.country }}
                </p>
                <p class="text-sm">
                    {{ dateFormat(weatherData.dt).longDate }}
                </p>
            </div>
            <div class="flex justify-between mb-1">
                <div class="s">ADD</div>
                <div class="flex text-blue-500 hover:text-blue-700 text-sm cursor-pointer"
                    @click="moreDetail">
                    <p>More details</p>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586
                            10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1
                            0 01-1.414 0z" clip-rule="evenodd" />
                    </svg>
                    </div>
            </div>
            <div class="bg-white">
                <div class="flex flex-col sm:flex-row gap-y-10 sm:gap-x-10 mb-10">
                    <div class="px-6 py-4 shadow-md border
                        border-gray-100 overflow-hidden rounded-lg w-full sm:w-1/2">
                        <div class="flex justify-between">
                            <p>{{ weatherData.name }}</p>
                            <p>{{ weatherData.weather[0].main }}</p>
                        </div>
                        <div class="flex flex-col justify-center w-full">
                            <div class="flex justify-center h-24">
                                <img :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
                                    :alt="`${weatherData.weather[0].description}`"
                                    class="h-24 w-24">
                            </div>
                            <div class="mt-2 flex justify-center">
                                <p>{{ toTitleCase(weatherData.weather[0].description) }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between mt-10">
                            <div>
                                <p>Real Feel</p>
                                <p class="text-2xl tracking-tighter">
                                    {{ weatherData.main.feels_like.toFixed() }}&deg;
                                </p>
                            </div>
                            <div class="text-6xl tracking-tighter">
                                <p>{{ weatherData.main.temp.toFixed() }}&deg;</p>
                            </div>
                        </div>
                    </div>
                    <div class="px-6 py-4 shadow-md border
                        border-gray-100 overflow-hidden rounded-lg w-full sm:w-1/2">
                        <div class="flex justify-between mb-3">
                            <div>
                                <p class="text-gray-400 text-xs">Pressure</p>
                                <p>{{ weatherData.main.pressure }} hPa</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">Wind Speed</p>
                                <p>{{ weatherData.wind.speed }} m/s</p>
                            </div>
                        </div>
                        <div class="flex justify-between mb-3">
                            <div>
                                <p class="text-gray-400 text-xs">Humidity</p>
                                <p>{{ weatherData.main.humidity }}%</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">Cloudiness</p>
                                <p>{{ weatherData.clouds.all }}%</p>
                            </div>
                        </div>
                        <div class="flex justify-between mb-3">
                            <div>
                                <p class="text-gray-400 text-xs">Visibility</p>
                                <p>{{ weatherData.visibility }} m</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">Timezone</p>
                                <p>{{ timezone(weatherData.timezone) }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between mb-3">
                            <div>
                                <p class="text-gray-400 text-xs">Sunrise</p>
                                <p>{{ dateFormat(weatherData.sys.sunrise).time }}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">Sunset </p>
                                <p>{{ dateFormat(weatherData.sys.sunset).time }}</p>
                            </div>
                        </div>
                        <div class="flex justify-between">
                            <div>
                                <p class="text-gray-400 text-xs">Latitude</p>
                                <p>{{ weatherData.coord.lat }}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-gray-400 text-xs">Longitude</p>
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
        };
    },
    created() {
        this.keyword = this.$route.query.q;
        this.getData();
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
            // deep: true,
            // immediate: true,
        },
    },
    methods: {
        async getData() {
            await this.axios.get(`weather?q=${this.keyword}&appid=${process.env.VUE_APP_API_KEY}&units=metric`)
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
                    }
                });
        },
        dateFormat(timestamp) {
            const df = timestamp * 1000;
            const fullDate = new Date(df);
            const longDateString = fullDate.toString();
            const splitDate = longDateString.split(' ');
            const day = splitDate[0];
            const month = splitDate[1];
            const date = splitDate[2];
            const year = splitDate[3];
            const time = splitDate[4].slice(0, -3);
            const tz = fullDate.getTimezoneOffset();
            const timezone = this.timezone(tz * (-60));
            return {
                longDate: `${day}, ${date} ${month} ${year} ${time} ${timezone}`,
                day: `${day}, ${date} ${month} ${year}`,
                time,
                timezone,
            };
        },
        timezone(timezone) {
            const tz = timezone / 3600;
            return tz > 0 ? `UTC+${tz}` : `UTC${tz}`;
        },
        toTitleCase(string) {
            return string.replace(
                /\w\S*/g,
                (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
            );
        },
        moreDetail() {
            this.$router.push({
                path: '/detail',
                query: {
                    lat: this.weatherData.coord.lat,
                    lon: this.weatherData.coord.lon,
                },
            });
        },
    },
};
</script>
