<template>
    <div>
        <div class="animate-pulse mb-5 space-y-2">
            <div class="h-6 w-full sm:w-1/2 bg-gray-200 rounded"></div>
            <div class="h-3 w-3/4 sm:w-1/4 bg-gray-200 rounded"></div>
        </div>
        <div class="bg-white mb-9">
            <div class="flex justify-between mb-2 animate-pulse">
                <div class="h-4 w-1/4 bg-gray-200 rounded"></div>
                <div class="h-4 w-1/4 bg-gray-200 rounded"></div>
            </div>
            <div class="overflow-x-auto no-scrollbar">
                <div class="flex space-x-4 mb-4">
                    <div class="px-6 py-4 shadow-md border border-gray-100
                        overflow-hidden rounded-lg min-w-min animate-pulse"
                        v-for="index in 50" :key="index">
                        <div class="flex flex-col items-center space-y-4 w-44">
                            <div class="flex justify-between w-full">
                                <div class="h-4 w-1/3 bg-gray-200 rounded"></div>
                                <div class="h-4 w-1/3 bg-gray-200 rounded"></div>
                            </div>
                            <div class="flex justify-center">
                                <div class="h-16 w-16 my-5 bg-gray-200 rounded-full"></div>
                            </div>
                            <div class="h-5 w-3/4 bg-gray-200 rounded"></div>
                            <div class="flex justify-between w-full">
                                <div class="w-10">
                                    <div class="h-10 w-full bg-gray-200 rounded"></div>
                                </div>
                                <div class="flex flex-col w-10 space-y-1">
                                    <div class="h-4 w-full bg-gray-200 rounded"></div>
                                    <div class="h-5 w-full bg-gray-200 rounded"></div>
                                </div>
                            </div>
                            <div class="flex justify-between w-full">
                                <div class="flex flex-col w-10 space-y-1">
                                    <div class="h-4 w-full bg-gray-200 rounded"></div>
                                    <div class="h-5 w-full bg-gray-200 rounded"></div>
                                </div>
                                <div class="flex flex-col w-10 space-y-1">
                                    <div class="h-4 w-full bg-gray-200 rounded"></div>
                                    <div class="h-5 w-full bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-white">
            <div class="flex justify-between mb-2 animate-pulse">
                <div class="h-4 w-1/4 bg-gray-200 rounded"></div>
                <div class="h-4 w-1/4 bg-gray-200 rounded"></div>
            </div>
            <div class="overflow-x-auto no-scrollbar">
                <div class="flex space-x-4 mb-4">
                    <div class="px-6 py-4 shadow-md border border-gray-100
                        overflow-hidden rounded-lg min-w-min animate-pulse"
                        v-for="index in 50" :key="index">
                        <div class="flex flex-col items-center space-y-4">
                            <div class="h-5 w-full bg-gray-200 rounded"></div>
                            <div class="flex justify-center w-32">
                                <div class="h-16 w-16 my-5 bg-gray-200 rounded-full"></div>
                            </div>
                            <div class="h-5 w-3/4 bg-gray-200 rounded"></div>
                            <div class="flex justify-between  items-end w-full">
                                <div class="w-10">
                                    <div class="h-10 w-full bg-gray-200 rounded"></div>
                                </div>
                                <div class="w-10">
                                    <div class="h-6 w-full bg-gray-200 rounded"></div>
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
    name: 'HomeSkeleton',
};
</script>
