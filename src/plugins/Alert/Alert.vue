<template>
    <div>
        <!-- <notificationGroup group="bottom" position="top"> -->
            <notificationGroup>
            <div class="fixed zinset-0 flex px-4 py-6 zpointer-events-none items-start
                justify-end z-50">
                <div class="max-w-sm w-full">
                <notification v-slot="{notifications}">
                    <div class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg
                        overflow-hidden mt-4 dark:bg-dark-900 dark:shadow-dark-md"
                        v-for="notification in notifications"
                        :key="notification.id">
                        <div class="flex justify-center items-center w-16 bg-green-500
                            border border-green-500 rounded-l-lg"
                            v-show="notification.alertIcon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000
                                    16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1
                                    1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="flex justify-between p-2 pl-4 text-green-500
                            w-full border
                            border-gray-100
                            border-l-0 rounded-r-lg dark:border-dark-700">
                            <div class="flex flex-col justify-center mr-4">
                                <div class="font-semibold" v-html="notification.title"></div>
                                <div class="text-sm" v-html="notification.text"></div>
                            </div>
                            <div class="" v-show="notification.closeButton">
                            <button class="p-0.5 rounded-md text-green-500 bg-green-500
                                bg-opacity-10 hover:text-green-600 hover:bg-opacity-25
                                dark:text-dark-500 dark:bg-black dark:bg-opacity-20
                                dark:hover:text-dark-400 dark:hover:bg-opacity-30"
                                @click="closeAlert(notification.id)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10
                                        8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293
                                        4.293a1
                                        1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0
                                        01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clip-rule="evenodd" />
                                </svg>
                            </button>
                            </div>
                        </div>
                    </div>
                </notification>
            </div>
        </div>
        </notificationGroup>
        <!-- <notificationGroup group="top">
            <div class="fixed inset-0 flex px-4 py-6 pointer-events-none items-start
                justify-end z-50">
                <div class="max-w-sm w-full">
                <notification v-slot="{notifications}">
                    <div class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-md
                        overflow-hidden mt-4 zbg-green-50"
                        v-for="notification in notifications"
                        :key="notification.id">
                        <div class="flex justify-center items-center w-12 bg-green-500">
                            <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337
                                    29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667
                                    20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337
                                    20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667
                                    13.3333L16.6667 28.3333Z">
                                </path>
                            </svg>
                        </div>
                        <div class="-mx-3 py-2 px-4 text-green-500">
                            <div class="mx-3">
                                <div class="ztext-green-500 font-semibold"
                                    v-html="notification.title"></div>
                                <div class="ztext-gray-600 text-sm"
                                    v-html="notification.text"></div>
                            </div>
                        </div>
                    </div>
                </notification>
            </div>
        </div>
        </notificationGroup> -->
        <!-- <notificationGroup group="bottom" position="bottom">
            <div class="fixed inset-x-0 bottom-0 flex px-4 py-6 pointer-events-none p-6
                items-start justify-end">
                <div class="max-w-sm w-full">
                    <notification v-slot="{notifications}">
                        <div class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg
                            overflow-hidden mt-4" v-for="notification in notifications"
                            :key="notification.id">
                            <div class="flex justify-center items-center w-12 bg-red-500">
                                <svg class="h-6 w-6 fill-current text-white" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" >
                                    <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667
                                        20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333
                                        36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667
                                        20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667
                                        6.66667V17.1H27.25L19.1334 33.3333Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="-mx-3 py-2 px-4">
                                <div class="mx-3">
                                    <span class="text-red-500 font-semibold">
                                        {{notification.title}}
                                    </span>
                                    <p class="text-gray-600 text-sm">{{notification.text}}</p>
                                </div>
                            </div>
                        </div>
                    </notification>
                </div>
            </div>
        </notificationGroup> -->
    </div>
</template>

<script>
import { methods } from './notifications';

export default {
    methods: {
        closeAlert(id) {
            methods.removeNotification(id);
        },
    },
};

// https://codesandbox.io/s/vue-tailwind-notifications-i4tgd?file=/src/App.vue
</script>