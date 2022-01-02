const StringFormater = {
    install(Vue) {
        // Capitalized each first word
        Vue.filter('titleCase', (string) => string.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
        ));

        // Captialized first word of string
        Vue.filter('ucfirst', (string) => string.charAt(0).toUpperCase() + string.slice(1));
    },
};

export default StringFormater;
