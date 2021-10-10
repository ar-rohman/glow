const Converter = {
    install(Vue) {
        // Convert meter per secound to kilometer per hours
        Vue.prototype.kmph = (mps) => {
            const mpsToKmph = (Number(mps) * 3.6).toFixed(1);
            const kmphSplit = mpsToKmph.toString().split('.');
            const kmph = Number(kmphSplit[1]) > 0 ? mpsToKmph : kmphSplit[0];
            return `${kmph} km/h`;
        };

        // Convert meter to kilometer
        Vue.prototype.mtokm = (meter) => {
            const mpk = (Number(meter) / 1000).toFixed(1);
            const kmSplit = mpk.toString().split('.');
            const km = Number(kmSplit[1]) > 0 ? mpk : kmSplit[0];
            return km < 1 ? `${meter} m` : `${km} km`;
        };

        // Convert celsius to fahrenheit if temperature set to fahrenheit
        Vue.prototype.temperature = (temp, unit) => {
            let resultTemp;
            if (unit === 'fahrenheit') {
                resultTemp = (Number(temp) * (9 / 5)) + 32;
            } else {
                resultTemp = Number(temp);
            }
            return resultTemp.toFixed();
        };
    },
};

export default Converter;
