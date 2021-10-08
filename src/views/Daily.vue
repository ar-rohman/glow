<template>
    <div>
        <div v-if="dailyData.length !== 0">
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
                        v-for="daily in dailyData" :key="daily.dt">
                        <div class="flex flex-col space-y-4">
                            <div class="flex flex-col items-center">
                                <div>{{ threeLetterDay(daily.dt) }}</div>
                                <div class="flex flex-col justify-center items-center w-full h-24">
                                    <img :src="`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`"
                                        :alt="`${daily.weather[0].description}`"
                                        class="h-24 w-24">
                                </div>
                                <div class="flex justify-center text-center">
                                    <p>{{ daily.weather[0].description | titleCase }}</p>
                                </div>
                                <div class="flex flex-col justify-center w-20">
                                    <div class="flex justify-between items-end mt-1">
                                        <div class="text-2xl tracking-tighter">
                                            {{ temperature(daily.temp.max, tempUnit) }}&deg;
                                        </div>
                                        <div class="tracking-tighter">
                                            {{ temperature(daily.temp.min, tempUnit) }}&deg;
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-wrap gap-4">
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Pressure</p>
                                    <p>{{ daily.pressure }} hPa</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Humidity</p>
                                    <p>{{ daily.humidity }}%</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Cloudiness</p>
                                    <p>{{ daily.clouds }}%</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">UV Index</p>
                                    <p>{{ daily.uvi.toFixed() }}</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Wind Speed</p>
                                    <p>{{ kmph(daily.wind_speed) }}</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Dew Point</p>
                                    <p>{{ temperature(daily.dew_point, tempUnit) }}&deg;</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Sunrise</p>
                                    <p>{{ time(daily.sunrise) }}</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Sunset</p>
                                    <p>{{ time(daily.sunset) }}</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Moonrise</p>
                                    <p>{{ time(daily.moonrise) }}</p>
                                </div>
                                <div class="w-20">
                                    <p class="text-xs text-gray-400">Moonset</p>
                                    <p>{{ time(daily.moonset) }}</p>
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
import Database from '@/storage/storageIdb';

export default {
    name: 'Daily',
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
        if (this.dailyData.length === 0) {
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
            dailyData: 'weather/daily',
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
