<template>
    <div>
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
                                    text-gray-300 placeholder-gray-400 shadow-sm rounded-md
                                    text-base focus:outline-none focus:ring-2 focus:ring-blue-700
                                    focus:border-transparent focus:text-gray-700"
                                    placeholder="Search location">
                                <p class="my-1">Location found!</p>
                                <button class="w-full inline-flex justify-center rounded-md
                                    border border-transparent shadow-sm px-4 py-2 bg-blue-600
                                    text-base font-medium text-white hover:bg-blue-700
                                    focus:outline-none focus:ring-2 focus:ring-offset-2
                                    focus:ring-blue-500 sm:w-auto sm:text-sm">
                                    Check
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
export default {
    name: 'Setting',
    methods: {
    },
};
</script>
