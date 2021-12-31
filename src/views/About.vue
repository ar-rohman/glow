<template>
    <div>
        <div class="mb-4">
            <p class="text-lg font-bold">{{ $t('about') }}</p>
        </div>
        <div class="dark:text-dark-300">
            <p>{{ $t('aboutDesc') }}</p>
            <p>
                {{ $t('dataSource') }}
                <a href="https://openweathermap.org/" class="text-blue-600 hover:text-blue-800"
                    target="_blank">OpenWeather</a>.
            </p>
            <p class="my-4">
                {{ $t('developedBy') }}
                <a href="https://github.com/ar-rohman" class="text-blue-600 hover:text-blue-800"
                    target="_blank">Rohman</a>
            </p>
            <p class="mb-4">{{ $t('version') }} {{ version }}</p>
            <p>{{ $t('copyright') }} &copy; 2021</p>
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
};
</script>
