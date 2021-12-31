<template>
    <transition
        enter-active-class="transition ease-out duration-1000"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition ease-in duration-200"
        leave-class="opacity-100"
        leave-to-class="opacity-0">
        <div class="fixed z-50 inset-0 overflow-y-auto"
            aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4
                px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity"
                    aria-hidden="true"></div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen"
                    aria-hidden="true">&#8203;</span>
                <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden
                    shadow-dark-lg transform transition-all sm:my-8 sm:align-middle sm:max-w-lg
                    sm:w-full dark:bg-dark-900">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-dark-900">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12
                                w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10
                                dark:bg-red-500">
                                <svg class="h-6 w-6 text-red-600 dark:text-dark-200"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0
                                        2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464
                                        0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900
                                    dark:text-dark-200" id="modal-title">
                                    {{ $t('modalTitle') }}
                                </h3>
                                <div class="mt-2">
                                    <div class="text-sm text-gray-500 dark:text-dark-400">
                                        <p>{{ $t('deleteMessage1') }}
                                            {{ city }}{{ $t('deleteMessage2') }}</p>
                                        <p>{{ $t('deleteMessage3') }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" @click="$emit('deleteLocation', city)"
                            class="w-full inline-flex justify-center rounded-md border
                            border-transparent shadow-sm px-4 py-2 bg-red-600 text-base
                            font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2
                            focus:ring-offset-2 focus:ring-red-600 sm:ml-3 sm:w-auto sm:text-sm
                            dark:focus:ring-offset-dark-900">
                            {{ $t('delete') }}
                        </button>
                        <button type="button" @click="$emit('closeModal')"
                            class="mt-3 w-full inline-flex justify-center rounded-md
                            border border-blue-700 shadow-sm px-4 py-2 bg-white text-base
                            font-medium text-blue-700 hover:bg-blue-700 hover:text-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700
                            sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:bg-dark-900
                            dark:hover:bg-blue-700 dark:focus:ring-offset-dark-900">
                            {{ $t('cancel') }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        city: {
            type: String,
            default: null,
            required: true,
        },
    },
};
</script>
