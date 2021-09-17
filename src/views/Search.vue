<template>
    <div class="text-gray-700">
        <div class="mb-4">
            <p class="text-lg font-bold">
                Weather forecast for {{ weatherData.name }}, {{ weatherData.sys.country}}
            </p>
            <p class="text-sm">
                {{ dateFormat(weatherData.dt).longDate }}
            </p>
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
                        <div class="flex justify-center">
                            <img :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
                                :alt="`${weatherData.weather[0].description}`" width="100">
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
            <div class="px-6 py-4 shadow-md border
                    border-gray-100 overflow-hidden rounded-lg w-full">
                    <p>aaa</p>
                    <p>aaa</p>
                    <p>aaa</p>
                    <p>aaa</p>
                    <p>aaa</p>
                </div>
        </div>

        <p class="mt-10"></p>
        <pre>{{ weatherData }}</pre>
    </div>
</template>

<script>
export default {
    name: 'Search',
    data() {
        return {
            keyword: '',
            weatherData: {},
            // currentTime: '',
        };
    },
    created() {
        this.keyword = this.$route.query.q;
        this.getData();
        // setInterval(this.getCurrentTime, 1000);
    },
    watch: {
        '$route.query.q': {
            handler(value) {
                if (this.keyword !== value) {
                    this.keyword = value;
                }
                this.getData();
            },
            // deep: true,
            // immediate: true,
        },
    },
    methods: {
        getData() {
            this.axios.get(`?q=${this.keyword}&appid=${process.env.VUE_APP_API_KEY}&units=metric`)
                .then((response) => {
                    const { data } = response;
                    this.weatherData = data;
                })
                .catch((error) => {
                    this.weatherData = {};
                    console.log(error.response.data);
                    const { data } = error.response;
                    if (data.cod === 404) {
                        //
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
            const time = splitDate[4]; // .slice(0, -3);
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
            return tz > 0 ? `UTC +${tz}` : `UTC ${tz}`;
        },
        toTitleCase(string) {
            return string.replace(
                /\w\S*/g,
                (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
            );
        },
        // getCurrentTime() {
        //     const today = new Date();
        //     const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        //     const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
        //     const dateTime = `${date} ${time}`;
        //     this.currentTime = dateTime;
        // },
    },
};
</script>
