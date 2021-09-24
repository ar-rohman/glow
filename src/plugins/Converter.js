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
    },
};

export default Converter;
