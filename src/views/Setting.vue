<template>
    <div>
        <div class="mb-4">
            <p class="text-lg font-bold">{{ $t('setting') }}</p>
        </div>
        <div>
            <div class="shadow-md border border-gray-100 overflow-hidden rounded-lg min-w-min
                dark:border-dark-700 dark:shadow-dark-md">
                <div class="divide-y dark:divide-dark-700">
                    <div class="group hover:bg-blue-50 dark:hover:bg-dark-800">
                        <div class="flex flex-col sm:flex-row py-4 px-6">
                            <div class="sm:w-1/3 pr-4">
                                <p class="font-bold">{{ $t('location') }}</p>
                                <p class="text-gray-500 text-sm dark:text-dark-400">
                                    {{ $t('locationInfo') }}
                                    <span class="font-bold">Jakarta</span>
                                </p>
                            </div>
                            <div class="sm:w-2/3 mt-4 sm:mt-1">
                                <input type="text" name="location"
                                    class="appearance-none border border-gray-300 w-full py-2 px-4
                                    text-gray-500 placeholder-gray-400 shadow-sm rounded-md
                                    text-base group-hover:bg-blue-50 focus:outline-none focus:ring-2
                                    focus:ring-blue-700 focus:border-transparent focus:text-gray-700
                                    dark:bg-dark-900 dark:focus:text-dark-200 dark:border-dark-700
                                    dark:focus:border-transparent dark:group-hover:bg-dark-800"
                                    autocomplete="off"
                                    :class="inputClassBind" v-model="location"
                                    :placeholder="$t('locationInputPlaceholder')"
                                    @change="checkLocation">
                                <p class="my-2 font-bold"
                                    :class="[isLocationExist ? 'text-green-500' : 'text-red-500']">
                                    {{ errorMessage }}
                                </p>
                                <button v-if="isLocationExist"
                                @click="setLocation"
                                    class="w-full inline-flex justify-center rounded-md
                                    border border-transparent shadow-sm px-4 py-2 bg-blue-600
                                    text-base font-medium text-white hover:bg-blue-700
                                    focus:outline-none focus:ring-2 focus:ring-offset-2
                                    focus:ring-blue-700 sm:w-auto sm:text-sm
                                    dark:focus:ring-offset-dark-900">
                                    {{ $t('saveLocation') }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hover:bg-blue-50 dark:hover:bg-dark-800">
                        <div class="flex flex-col sm:flex-row py-4 px-6">
                            <div class="sm:w-1/3">
                                <p class="font-bold">Temperature</p>
                            </div>
                            <div class="flex flex-col">
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="temperature" id="celsius"
                                        class="h-5 w-5 text-blue-700 dark:bg-dark-900
                                        dark:checked:bg-blue-700 dark:border-dark-200
                                        dark:focus:ring-offset-dark-900
                                        dark:checked:border-current"
                                        value="celsius"
                                        v-model="temp" @change="setTemp"
                                        :checked="temp === 'celsius'">
                                    <label for="celsius" class="ml-2">Celsius (&deg;C)</label>
                                </div>
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="temperature" id="fahrenheit"
                                        class="h-5 w-5 text-blue-700 dark:bg-dark-900
                                        dark:checked:bg-blue-700 dark:border-dark-200
                                        dark:focus:ring-offset-dark-900
                                        dark:checked:border-current"
                                        value="fahrenheit"
                                        v-model="temp" @change="setTemp"
                                        :checked="temp === 'fahrenheit'">
                                    <label for="fahrenheit" class="ml-2">Fahrenheit (&deg;F)</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hover:bg-blue-50 dark:hover:bg-dark-800">
                        <div class="flex flex-col sm:flex-row py-4 px-6">
                            <div class="sm:w-1/3">
                                <p class="font-bold">{{ $t('theme') }}</p>
                            </div>
                            <div class="flex flex-col">
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="theme" id="default"
                                        class="h-5 w-5 text-blue-700 dark:bg-dark-900
                                        dark:checked:bg-blue-700 dark:border-dark-200
                                        dark:focus:ring-offset-dark-900
                                        dark:checked:border-current"
                                        value="default"
                                        v-model="theme" @change="setTheme"
                                        :checked="theme === 'default'">
                                    <label for="default" class="ml-2">
                                        {{ $t('systemDefault') }}
                                    </label>
                                </div>
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="theme" id="dark"
                                        class="h-5 w-5 text-blue-700 dark:bg-dark-900
                                        dark:checked:bg-blue-700 dark:border-dark-200
                                        dark:focus:ring-offset-dark-900
                                        dark:checked:border-current"
                                        value="dark"
                                        v-model="theme" @change="setTheme"
                                        :checked="theme === 'dark'">
                                    <label for="dark" class="ml-2">{{ $t('dark') }}</label>
                                </div>
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="theme" id="light"
                                        class="h-5 w-5 text-blue-700 dark:bg-dark-900
                                        dark:checked:bg-blue-700 dark:border-dark-200
                                        dark:focus:ring-offset-dark-900
                                        dark:checked:border-current" value="light"
                                        v-model="theme" @change="setTheme"
                                        :checked="theme === 'light'">
                                    <label for="light" class="ml-2">{{ $t('light') }}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hover:bg-blue-50 dark:hover:bg-dark-800">
                        <div class="flex flex-col sm:flex-row py-4 px-6">
                            <div class="sm:w-1/3">
                                <p class="font-bold">{{ $t('language') }}</p>
                            </div>
                            <div class="flex flex-col">
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="language" id="en"
                                        class="h-5 w-5 text-blue-700 dark:bg-dark-900
                                        dark:checked:bg-blue-700 dark:border-dark-200
                                        dark:focus:ring-offset-dark-900
                                        dark:checked:border-current"
                                        value="en"
                                        v-model="language" @change="setLanguage"
                                        :checked="language === 'en'">
                                    <label for="en" class="ml-2">
                                        English
                                    </label>
                                </div>
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="language" id="id"
                                        class="h-5 w-5 text-blue-700 dark:bg-dark-900
                                        dark:checked:bg-blue-700 dark:border-dark-200
                                        dark:focus:ring-offset-dark-900
                                        dark:checked:border-current"
                                        value="id"
                                        v-model="language" @change="setLanguage"
                                        :checked="language === 'id'">
                                    <label for="id" class="ml-2">Bahasa Indonesia</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Database from '@/storage/storageIdb';
import i18n from '@/plugins/i18n';

export default {
    name: 'Setting',
    data() {
        return {
            temp: 'celsius',
            location: 'Jakarta',
            theme: 'default',
            language: 'en',
            isLocationExist: false,
            errorMessage: null,
            objectStoreSetting: process.env.VUE_APP_OBJECT_STORE_SETTING,
        };
    },
    created() {
        this.getLocation();
        this.getTemp();
        this.getTheme();
        this.getLanguage();
    },
    methods: {
        async getTheme() {
            const idbTheme = await Database.getData(this.objectStoreSetting, 'theme');
            if (idbTheme) {
                this.theme = idbTheme.value;
            }
        },
        setTheme() {
            Database.updateData(this.objectStoreSetting, {
                name: 'theme',
                value: this.theme,
            });
            if (this.theme === 'dark' || (this.theme === 'default' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        },
        async getTemp() {
            const idbTemp = await Database.getData(this.objectStoreSetting, 'temperature');
            if (idbTemp) {
                this.temp = idbTemp.value;
            }
        },
        setTemp() {
            Database.updateData(this.objectStoreSetting, {
                name: 'temperature',
                value: this.temp,
            });
        },
        async getLocation() {
            const idbLocation = await Database.getData(this.objectStoreSetting, 'location');
            if (idbLocation) {
                this.location = idbLocation.value;
            }
        },
        setLocation() {
            if (this.isLocationExist) {
                Database.updateData(this.objectStoreSetting, {
                    name: 'location',
                    value: this.$options.filters.titleCase(this.location),
                });
                this.$alert({
                    type: 'success',
                    title: this.$t('alertSuccess'),
                    text: `${this.$t('defaultLocationMessage')} ${this.location}`,
                    group: 'indexed-db',
                });
                this.isLocationExist = false;
                this.errorMessage = null;
            }
        },
        checkLocation() {
            if (this.location) {
                this.$axios(`weather?q=${this.location}`)
                    .then((response) => {
                        const { cod } = response.data;
                        if (Number(cod) === 200) {
                            this.isLocationExist = true;
                            this.errorMessage = `${this.location} ${this.$t('isFound')}`;
                        }
                    })
                    .catch((error) => {
                        this.isLocationExist = false;
                        if (error.response) {
                            const { cod } = error.response.data;
                            if (Number(cod) === 404) {
                                this.errorMessage = `${this.location} ${this.$t('isNotFound')}`;
                            } else {
                                this.errorMessage = this.$t('error');
                            }
                        } else {
                            this.errorMessage = error.toJSON().message;
                        }
                    });
            }
        },
        async getLanguage() {
            const idbLanguage = await Database.getData(this.objectStoreSetting, 'language');
            if (idbLanguage) {
                this.language = idbLanguage.value;
            }
        },
        setLanguage() {
            Database.updateData(this.objectStoreSetting, {
                name: 'language',
                value: this.language,
            });
            i18n.locale = this.language;
        },
    },
    computed: {
        inputClassBind() {
            let result;
            if (this.errorMessage) {
                if (this.isLocationExist) {
                    result = 'text-green-500 border border-green-500';
                } else {
                    result = 'text-red-500 border border-red-500';
                }
            }
            return result;
        },
    },
};
</script>
