<template>
    <div>
        <Alert />
        <div class="mb-4">
            <p class="text-lg font-bold">Settings</p>
        </div>
        <div class="bg-white">
            <div class="shadow-md border border-gray-100 overflow-hidden rounded-lg min-w-min">
                <div class="divide-y">
                    <div class="hover:bg-blue-50">
                        <div class="flex flex-col sm:flex-row py-4 px-6">
                            <div class="sm:w-1/3 pr-4">
                                <p class="font-bold">Location</p>
                                <p class="text-gray-500 text-sm">
                                    Set default location used at home page,
                                    the default location is
                                    <span class="font-bold">Jakarta</span>
                                </p>
                            </div>
                            <div class="sm:w-2/3 mt-4 sm:mt-1">
                                <input type="text" name="location"
                                    class="appearance-none border border-gray-300 w-full py-2 px-4
                                    text-gray-500 placeholder-gray-400 shadow-sm rounded-md
                                    text-base focus:outline-none focus:ring-2 focus:ring-blue-700
                                    focus:border-transparent focus:text-gray-700" autocomplete="off"
                                    :class="inputClassBind" v-model="location"
                                    placeholder="Type location then enter..."
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
                                    focus:ring-blue-500 sm:w-auto sm:text-sm">
                                    Save location
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="hover:bg-blue-50">
                        <div class="flex flex-col sm:flex-row py-4 px-6">
                            <div class="sm:w-1/3">
                                <p class="font-bold">Temperature</p>
                            </div>
                            <div class="flex flex-col">
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="temperature" id="celsius"
                                        class="form-radio h-5 w-5" value="celsius" checked>
                                    <label for="celsius" class="ml-2">Celsius (&deg;C)</label>
                                </div>
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="temperature" id="fahrenheit"
                                        class="form-radio h-5 w-5" value="fahrenheit">
                                    <label for="fahrenheit" class="ml-2">Fahrenheit (&deg;F)</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hover:bg-blue-50">
                        <div class="flex flex-col sm:flex-row py-4 px-6">
                            <div class="sm:w-1/3">
                                <p class="font-bold">Theme</p>
                            </div>
                            <div class="flex flex-col">
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="theme" id="default"
                                        class="form-radio h-5 w-5" value="default" checked>
                                    <label for="default" class="ml-2">System default</label>
                                </div>
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="theme" id="dark"
                                        class="form-radio h-5 w-5" value="dark">
                                    <label for="dark" class="ml-2">Dark</label>
                                </div>
                                <div class="inline-flex items-center mt-2">
                                    <input type="radio" name="theme" id="light"
                                        class="form-radio h-5 w-5" value="light">
                                    <label for="light" class="ml-2">Light</label>
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
import { mapActions } from 'vuex';
import Alert from '@/components/Alert.vue';
import Database from '@/storage/storageIdb';

export default {
    name: 'Setting',
    components: {
        Alert,
    },
    data() {
        return {
            location: null,
            isLocationExist: false,
            errorMessage: null,
            objectStoreSetting: process.env.VUE_APP_OBJECT_STORE_SETTING,
        };
    },
    created() {
        this.getLocation();
    },
    methods: {
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
                this.setAlert({
                    type: 'success',
                    message: `${this.location} successfully added to default location`,
                    showAlert: true,
                });
                this.isLocationExist = false;
                this.errorMessage = null;
            }
        },
        checkLocation() {
            if (this.location) {
                this.axios.get(`weather?q=${this.location}&appid=${process.env.VUE_APP_API_KEY}`)
                    .then((response) => {
                        const { cod } = response.data;
                        if (Number(cod) === 200) {
                            this.isLocationExist = true;
                            this.errorMessage = `${this.location} is found!`;
                        }
                    })
                    .catch((error) => {
                        this.isLocationExist = false;
                        const { cod } = error.response.data;
                        if (Number(cod) === 404) {
                            this.errorMessage = `${this.location} isn't found!`;
                        } else {
                            this.errorMessage = 'Something went wrong, please try again';
                        }
                    });
            }
        },
        ...mapActions({
            setAlert: 'alert/set',
        }),
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
