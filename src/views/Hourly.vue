<template>
    <div>
        <div v-if="hourlyData.length !== 0">
            <div class="mb-4">
                <p class="text-lg font-bold">
                    Hourly weather forecast for {{ city | titleCase }}
                </p>
                <p class="text-xs">
                    Last updated {{ longFullDate(timestamp) }}
                </p>
            </div>
            <div class="bg-white">
                <div class="flex flex-wrap gap-6">
                    <div class="px-6 py-4 shadow-md border flex-grow flex-shrink-0
                        border-gray-100 overflow-hidden rounded-lg w-64"
                        v-for="hourly in hourlyData" :key="hourly.dt">
                        <div class="flex flex-col space-y-4">
                            <div class="flex flex-col items-center">
                                <div class="text-lg">{{ time(hourly.dt) }}</div>
                                <div class="text-sm">{{ shortDate(hourly.dt) }}</div>
                                <div class="flex flex-col justify-center w-full">
                                    <div class="flex justify-center items-center h-24">
                                        <img :src="`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`"
                                            :alt="`${hourly.weather[0].description}`"
                                            class="h-24 w-24">
                                        <div class="ml-4 text-6xl tracking-tighter">
                                            {{ hourly.temp.toFixed() }}&deg;
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-center text-center">
                                    <p>{{ hourly.weather[0].description | titleCase }}</p>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-4">
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Real Feel</p>
                                    <p>{{ hourly.feels_like.toFixed() }}&deg;</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Pressure</p>
                                    <p>{{ hourly.pressure }} hPa</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Humidity</p>
                                    <p>{{ hourly.humidity }}%</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Cloudiness</p>
                                    <p>{{ hourly.clouds }}%</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Visibility</p>
                                    <p>{{ mtokm(hourly.visibility) }}</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">UV Index</p>
                                    <p>{{ hourly.uvi.toFixed() }}</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Wind Speed</p>
                                    <p>{{ kmph(hourly.wind_speed) }}</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Dew Point</p>
                                    <p>{{ hourly.dew_point.toFixed() }}&deg;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <ErrorPage v-bind="errorData" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ErrorPage from '@/components/ErrorPage.vue';

export default {
    name: 'Hourly',
    components: {
        ErrorPage,
    },
    data() {
        return {
            isLoadnig: false,
            isError: false,
            errorData: null,
        };
    },
    created() {
        if (this.hourlyData.length === 0) {
            this.errorData = {
                cod: 404,
                message: 'Sorry, the page you requested could not be found.',
            };
        }
    },
    computed: {
        ...mapGetters({
            city: 'city',
            timestamp: 'timestamp',
            hourlyData: 'weather/hourly',
        }),
    },
};
</script>