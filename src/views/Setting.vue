<template>
    <div>
        <button @click="test">click</button>
    </div>
</template>

<script>
export default {
    name: 'HomeSkeleton',
    methods: {
        test() {
            const noun = [
                'Thunderstorm',
                'Drizzle',
                'Rain',
                'Snow',
                'Mist',
                'Smoke',
                'Haze',
                'Dust',
                'Fog',
                'Sand',
                'Ash',
                'Squall',
                'Tornado',
                'Clear',
                'Clouds',
            ];
            const adj = [
                'Thunderstorm',
                'Drizzly',
                'Rainy',
                'Snowy',
                'Misty ',
                'Smoky',
                'Hazy',
                'Dusty',
                'Foggy',
                'Sandy',
                'Ash',
                'Squall',
                'Tornado',
                'Clear',
                'Cloudy',
            ];
            const string = 'Fog';
            let result = null;
            const findString = noun.findIndex((word) => word === string);
            if (findString > -1) {
                result = adj[findString];
            } else {
                result = string;
            }
            // return result
            console.log(`result ${result}`);
            // console.log(`rest ${findString}`);
            // console.log(`result ${result}`);
        },
    },
};
</script>
