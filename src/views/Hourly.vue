<template>
    <div>
        <div v-if="hourlyData.length !== 0">
            <div class="mb-4">
                <p class="text-lg font-bold">
                    Hourly weather forecast for {{ city | titleCase }}
                </p>
                <p class="text-xs">
                    Last updated {{ timeFromNow(timestamp) }}
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="px-6 py-4 shadow-md border border-gray-100 overflow-hidden
                    rounded-lg dark:border-dark-700 dark:shadow-dark-md"
                    v-for="hourly in hourlyData" :key="hourly.dt">
                    <div class="space-y-4">
                        <div class="grid justify-center">
                            <div class="text-lg justify-self-center">
                                {{ time(hourly.dt, timezone) }}
                            </div>
                            <div class="text-sm justify-self-center">
                                {{ shortDate(hourly.dt, timezone) }}
                            </div>
                            <div class="grid justify-center grid-cols-2">
                                <img :src="`http://openweathermap.org/img/wn/${hourly.weather[0].icon}@2x.png`"
                                    :alt="`${hourly.weather[0].description}`" class="h-24 w-24">
                                <div class="justify-self-end place-self-center
                                    text-6xl tracking-tighter">
                                    {{ temperature(hourly.temp, tempUnit) }}&deg;
                                </div>
                            </div>
                            <div class="text-center">
                                <p>{{ hourly.weather[0].description | titleCase }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-auto-fill gap-4 pt-4">
                            <div>
                                <p class="text-xs text-gray-400">Real Feel</p>
                                <p>{{ temperature(hourly.feels_like, tempUnit) }}&deg;</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">Pressure</p>
                                <p>{{ hourly.pressure }} hPa</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">Humidity</p>
                                <p>{{ hourly.humidity }}%</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">Cloudiness</p>
                                <p>{{ hourly.clouds }}%</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">Visibility</p>
                                <p>{{ mtokm(hourly.visibility) }}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">UV Index</p>
                                <p>{{ hourly.uvi.toFixed() }}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">Wind Speed</p>
                                <p>{{ kmph(hourly.wind_speed) }}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">Dew Point</p>
                                <p>{{ temperature(hourly.dew_point, tempUnit) }}&deg;</p>
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
import Database from '@/storage/storageIdb';

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
            tempUnit: 'celsius',
            objectStoreSetting: process.env.VUE_APP_OBJECT_STORE_SETTING,
        };
    },
    created() {
        this.getTempUnit();
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
            timezone: 'timezone',
            hourlyData: 'weather/hourly',
        }),
    },
    methods: {
        async getTempUnit() {
            const idbTemp = await Database.getData(this.objectStoreSetting, 'temperature');
            if (idbTemp) {
                this.tempUnit = idbTemp.value;
            }
        },
    },
};
</script>
