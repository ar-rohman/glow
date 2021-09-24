const StringFormater = {
    install(Vue) {
        Vue.filter('titleCase', (string) => string.replace(
            /\w\S*/g,
            (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
        ));
    },
};

export default StringFormater;
