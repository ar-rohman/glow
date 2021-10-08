<template>
    <div class="relative">
        <transition
            enter-active-class="transition duration-700 ease-in"
            enter-class="transform -translate-y-1/3 opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition duration-700 ease-out"
            leave-class="opacity-100"
            leave-to-class=" transform -translate-y-1/3 opacity-0">
            <div class="absolute w-full top-1/3 z-50"  v-if="alert">
                <div class="flex justify-center">
                    <div class="bg-green-50 px-4 py-2 border border-green-300
                        overflow-hidden rounded-lg w-max max-w-screen-md
                        dark:bg-green-500 dark:border-transparent"
                        v-if="type === 'success'">
                        <div class="flex text-green-500 dark:text-dark-100">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p class="ml-2">{{ message }}</p>
                        </div>
                    </div>
                    <div class="bg-blue-50 px-4 py-2 border border-blue-300
                        overflow-hidden rounded-lg w-max max-w-screen-md
                        dark:bg-blue-500 dark:border-transparent"
                        v-else-if="type === 'info'">
                        <div class="flex text-blue-500 dark:text-dark-100">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0
                                        9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p class="ml-2">{{ message }}</p>
                        </div>
                    </div>
                    <div class="bg-yellow-50 px-4 py-2 border border-yellow-300
                        overflow-hidden rounded-lg w-max max-w-screen-md
                        dark:bg-yellow-500 dark:border-transparent"
                        v-else-if="type === 'warning'">
                        <div class="flex text-yellow-500 dark:text-dark-100">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p class="ml-2">{{ message }}</p>
                        </div>
                    </div>
                    <div class="bg-red-50 px-4 py-2 border border-red-300
                        overflow-hidden rounded-lg w-max max-w-screen-md
                        dark:bg-red-500 dark:border-transparent"
                        v-else-if="type === 'error'">
                        <div class="flex text-red-500 dark:text-dark-100">
                            <div class="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667
                                        1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77
                                        1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <p class="ml-2">{{ message }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Alert',
    computed: {
        ...mapGetters({
            type: 'alert/type',
            message: 'alert/message',
            showAlert: 'alert/showAlert',
        }),
        alert: {
            get() {
                return this.showAlert;
            },
            set() {
                this.setAlert({
                    type: 'success',
                    message: null,
                    showAlert: false,
                });
            },
        },
    },
    methods: {
        ...mapActions({
            setAlert: 'alert/set',
        }),
    },
};
</script>
