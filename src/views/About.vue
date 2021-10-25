<template>
    <div>
        <div class="mb-4">
            <p class="text-lg font-bold">About</p>
        </div>
        <div class="dark:text-dark-300">
            <p>Glow (stands for Global Weather) is an application that
                provides weather data for any location on Earth.</p>
            <p>
                All weather data taken from
                <a href="https://openweathermap.org/" class="text-blue-600 hover:text-blue-800"
                    target="_blank">OpenWeather</a>.
            </p>
            <p class="my-4">
                Developed by
                <a href="https://github.com/ar-rohman" class="text-blue-600 hover:text-blue-800"
                    target="_blank">Rohman</a>
            </p>
            <p class="mb-4">Version {{ version }}</p>
            <p>Copyright &copy; 2021</p>
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
