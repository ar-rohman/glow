<template>
    <div>
        <div class="mb-4">
            <p class="text-lg font-bold">{{ $t('about') }}</p>
        </div>
        <div class="dark:text-dark-300">
            <p>{{ $t('aboutDesc') }}</p>
            <p class="mt-4">
                {{ $t('dataSource') }}
                <a href="https://openweathermap.org/" class="text-blue-600 hover:text-blue-800"
                    target="_blank" rel="noopener">OpenWeather</a>.
            </p>
            <div class="fixed bottom-4 text-sm">
                {{ $t('copyright') }} &copy; {{ copyrightYear }}
                <a href="https://github.com/ar-rohman" class="text-blue-600 hover:text-blue-800"
                    target="_blank" rel="noopener">Rohman</a> | v{{ version }}
            </div>
        </div>
    </div>
</template>

<script>
import { version } from '../../package.json';

export default {
    name: 'About',
    data() {
        return {
            version,
        };
    },
    computed: {
        copyrightYear() {
            const now = (new Date()).getFullYear();
            return `2021-${now}`;
        },
    },
};
</script>
