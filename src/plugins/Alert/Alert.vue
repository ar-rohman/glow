<template>
    <div>
        <alert-group :position="position" :group="group">
            <div class="fixed z-50" :class="positionStyles">
                <div class="w-full sm:w-96 px-4">
                    <alert-container v-slot="{alerts}">
                        <div class="flex max-w-sm w-full mx-auto bg-white shadow-md rounded-lg
                            overflow-hidden mt-4 dark:bg-dark-900 dark:shadow-dark-md"
                            v-for="alert in alerts" :key="alert.id">
                            <div class="flex justify-center items-center w-16 border rounded-l-lg"
                                :class="alertStyles(alert.type).icon" v-show="alert.alertIcon">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white"
                                        viewBox="0 0 20 20" fill="currentColor"
                                        v-if="alert.type === 'success'">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000
                                        16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1
                                        1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    v-else-if="alert.type === 'info'">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116
                                        0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0
                                        001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                        clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    v-else-if="alert.type === 'warning'">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116
                                    0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0
                                    102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white"
                                    viewBox="0 0 20 20" fill="currentColor"
                                    v-else-if="alert.type === 'error'">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000
                                        16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1
                                        1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0
                                        001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10
                                        8.586 8.707 7.293z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="p-2 pl-4 w-full border border-gray-100
                                dark:border-dark-700" :class="alertStyles(alert.type).content">
                                <div class="flex flex-col justify-center">
                                    <div class="flex justify-between">
                                        <div class="font-semibold">
                                            <div v-html="alert.title"></div>
                                        </div>
                                        <div v-show="alert.closeButton">
                                            <button class="p-0.5 rounded-md bg-opacity-10
                                                hover:bg-opacity-25 dark:text-dark-500 dark:bg-black
                                                dark:bg-opacity-20 dark:hover:text-dark-400
                                                dark:hover:bg-opacity-30"
                                                :class="alertStyles(alert.type).closeButton"
                                                @click="closeAlert(alert.id)">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20"
                                                    fill="currentColor">
                                                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0
                                                        011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                                                        1.414L11.414 10l4.293 4.293a1 1 0 01-1.414
                                                        1.414L10 11.414l-4.293 4.293a1 1 0
                                                        01-1.414-1.414L8.586 10 4.293 5.707a1
                                                        1 0 010-1.414z" clip-rule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="text-sm pr-2" v-html="alert.text"></div>
                                </div>
                            </div>
                        </div>
                    </alert-container>
                </div>
            </div>
        </alert-group>
    </div>
</template>

<script>
import { methods } from './util';
import defaults from './defaults';
import AlertGroup from './AlertGroup.vue';
import AlertContainer from './AlertContainer.vue';

export default {
    name: 'Alert',
    components: {
        AlertGroup,
        AlertContainer,
    },
    props: {
        group: {
            type: String,
            default: defaults.group,
        },
        position: {
            type: String,
            default: defaults.position,
            validator(value) {
                return ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'].includes(value);
            },
        },
    },
    computed: {
        positionStyles() {
            const position = this.position.split('-');
            const positionY = position[0];
            const positionX = position[1];
            const styleY = (positionY === 'top') ? 'top-16' : 'bottom-16';
            let styleX;
            if (positionX === 'left') {
                styleX = 'left-0';
            } else if (positionX === 'right') {
                styleX = 'right-0';
            } else {
                styleX = 'sm:left-center';
            }
            return `${styleY} ${styleX}`;
        },
    },
    methods: {
        alertStyles(type) {
            let content;
            let closeButton;
            let icon;
            if (type === 'success') {
                content = 'text-green-500 border-l-0 rounded-r-lg';
                icon = 'bg-green-500 border-green-500';
                closeButton = 'text-green-500 bg-green-500 hover:text-green-600';
            } else if (type === 'info') {
                content = 'text-blue-500 border-l-0 rounded-r-lg';
                icon = 'bg-blue-500 border-blue-500';
                closeButton = 'text-blue-500 bg-blue-500 hover:text-blue-600';
            } else if (type === 'warning') {
                content = 'text-yellow-500 border-l-0 rounded-r-lg';
                icon = 'bg-yellow-500 border-yellow-500';
                closeButton = 'text-yellow-500 bg-yellow-500 hover:text-yellow-600';
            } else if (type === 'error') {
                content = 'text-red-500 border-l-0 rounded-r-lg';
                icon = 'bg-red-500 border-red-500';
                closeButton = 'text-red-500 bg-red-500 hover:text-red-600';
            } else {
                content = 'text-gray-700 dark:text-dark-200 rounded-lg';
                icon = 'hidden';
                closeButton = 'text-gray-500 bg-gray-500 hover:text-gray-600';
            }
            return { content, icon, closeButton };
        },
        closeAlert(id) {
            methods.removeAlert(id);
        },
    },
};
</script>
