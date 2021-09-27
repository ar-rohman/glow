const StringFormater = {
    install(Vue) {
        // Capitalized each first word
        Vue.filter('titleCase', (string) => string.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
        ));

        // Captialized first word of string
        Vue.filter('ucfirst', (string) => string.charAt(0).toUpperCase() + string.slice(1));

        // Change noun/verb to adjective
        Vue.prototype.adjective = (string) => {
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
            let result = null;
            const findString = noun.findIndex((word) => word === string);
            if (findString > -1) {
                result = adj[findString];
            } else {
                result = string;
            }
            return result;
        };
    },
};

export default StringFormater;
