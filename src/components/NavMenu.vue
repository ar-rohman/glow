<template>
    <nav class="flex justify-between gap-x-4 items-center flex-grow fixed bottom-0
            inset-x-0 w-full sm:w-auto sm:bottom-auto sm:inset-x-auto sm:relative sm:justify-end
            px-6 py-2 bg-white border-t sm:border-none sm:py-0 text-sm sm:text-base">
        <div :class="{ 'text-blue-700': isActivePath('/') }">
            <router-link to="/" class="flex flex-col items-center hover:text-blue-700">
                <div class="sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                        fill="currentColor" v-if="isActivePath('/')">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414
                            1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1
                            1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1
                            0 001.414-1.414l-7-7z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" v-else>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1
                            1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001
                            1m-6 0h6" />
                    </svg>
                </div>
                <p>Home</p>
            </router-link>
        </div>
        <div :class="{ 'text-blue-700': isActivePath('/favorite') }">
            <router-link to="/favorite" class="flex flex-col items-center hover:text-blue-700">
                <div class="sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                        fill="currentColor"  v-if="isActivePath('/favorite')">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0
                            00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364
                            1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175
                            0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0
                            00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0
                            00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" v-else>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0
                            00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363
                            1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1
                            0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1
                            1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1
                            0 00.951-.69l1.519-4.674z" />
                    </svg>
                </div>
                <p>Favorite</p>
            </router-link>
        </div>
        <div :class="{ 'text-blue-700': isActivePath('/setting') }">
            <router-link to="/setting" class="flex flex-col items-center hover:text-blue-700">
                <div class="sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                        fill="currentColor" v-if="isActivePath('/setting')">
                        <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98
                            0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106
                            2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532
                            1.532 0 01.947 2.287c-.8361.372.734 2.942 2.106 2.106a1.532
                            1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533
                            1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533
                            1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532
                            0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532
                            1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                            clip-rule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" v-else>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573
                            1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426
                            1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37
                            2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724
                            1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0
                            00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0
                            001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07
                            2.572-1.065z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
                <p>Setting</p>
            </router-link>
        </div>

        <div :class="{ 'text-blue-700': isActivePath('/about') }">
            <router-link to="/about" class="flex flex-col items-center hover:text-blue-700">
                <div class="sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                        fill="currentColor" v-if="isActivePath('/about')">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0
                            11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0
                            00-1-1H9z" clip-rule="evenodd" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" v-else>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <p>About</p>
            </router-link>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavMenu',
    data() {
        return {
            activeLink: '',
        };
    },
    methods: {
        isActivePath(path) {
            return this.$route.path === path;
        },
    },
};
</script>
