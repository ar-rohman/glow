<template>
    <div>
        <div v-if="dailyData.length !== 0">
            <div class="mb-4">
                <p class="text-lg font-bold">
                    {{ $t('dailyPageTitle') }} {{ city | titleCase }}
                </p>
                <p class="text-xs">
                    {{ $t('lastUpdated') }} {{ timeFromNow(timestamp) }}
                </p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div class="px-6 py-4 shadow-md border border-gray-100 overflow-hidden
                    rounded-lg dark:border-dark-700 dark:shadow-dark-md"
                    v-for="daily in dailyData" :key="daily.dt">
                    <div class="space-y-4">
                        <div class="grid justify-center">
                            <div>{{ threeLetterDay(daily.dt, timezone) }}</div>
                            <div class="grid justify-center">
                                <img :src="`http://openweathermap.org/img/wn/${daily.weather[0].icon}@2x.png`"
                                    :alt="`${daily.weather[0].description}`" class="h-24 w-24">
                            </div>
                            <div class="text-center">
                                <p>{{ daily.weather[0].description | titleCase }}</p>
                            </div>
                            <div class="grid grid-cols-2 mt-2">
                                <div class="text-2xl tracking-tighter">
                                    {{ temperature(daily.temp.max, tempUnit) }}&deg;
                                </div>
                                <div class="place-self-end tracking-tighter">
                                    {{ temperature(daily.temp.min, tempUnit) }}&deg;
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-auto-fill gap-4 pt-4">
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('pressure') }}</p>
                                <p>{{ daily.pressure }} hPa</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('humidity') }}</p>
                                <p>{{ daily.humidity }}%</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('cloudiness') }}</p>
                                <p>{{ daily.clouds }}%</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('uvIndex') }}</p>
                                <p>{{ daily.uvi.toFixed() }}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('windSpeed') }}</p>
                                <p>{{ kmph(daily.wind_speed) }}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('dewPoint') }}</p>
                                <p>{{ temperature(daily.dew_point, tempUnit) }}&deg;</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('sunrise') }}</p>
                                <p>{{ time(daily.sunrise, timezone) }}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('sunset') }}</p>
                                <p>{{ time(daily.sunset, timezone) }}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('moonrise') }}</p>
                                <p>{{ time(daily.moonrise, timezone) }}</p>
                            </div>
                            <div>
                                <p class="text-xs text-gray-400">{{ $t('moonset') }}</p>
                                <p>{{ time(daily.moonset, timezone) }}</p>
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
                message: this.$t('pageNotFound'),
            };
        }
    },
    computed: {
        ...mapGetters({
            city: 'city',
            timestamp: 'timestamp',
            timezone: 'timezone',
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
