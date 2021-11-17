const DateFormater = {
    install(Vue) {
        // Return time in the city or location you are looking for
        Vue.prototype.threeLetterDay = (timestamp, timezone) => {
            const utcFullDate = new Date((timestamp * 1000) + (timezone * 1000));
            const longDateString = utcFullDate.toUTCString();
            const splitDate = longDateString.split(' ');
            const day = splitDate[0];
            const month = splitDate[1];
            const date = splitDate[2];
            const year = splitDate[3];
            return `${day} ${date} ${month} ${year}`;
        };
        Vue.prototype.shortDate = (timestamp, timezone) => {
            const utcFullDate = new Date((timestamp * 1000) + (timezone * 1000));
            const date = utcFullDate.getUTCDate();
            const month = utcFullDate.getUTCMonth() + 1;
            const year = (utcFullDate.getUTCFullYear()).toString().slice(-2);
            return `${date}/${month}/${year}`;
        };
        Vue.prototype.time = (timestamp, timezone) => {
            const utcDate = new Date((timestamp * 1000) + (timezone * 1000));
            const hour = (`0${utcDate.getUTCHours()}`).slice(-2);
            const minute = (`0${utcDate.getUTCMinutes()}`).slice(-2);
            return `${hour}:${minute}`;
        };
        Vue.prototype.timeFromNow = (timestamp) => {
            const df = timestamp * 1000;
            const fromDate = new Date(df);
            const difference = fromDate - (new Date());
            const units = {
                year: 1000 * 60 * 60 * 24 * 365,
                month: 1000 * 60 * 60 * 24 * (365 / 12),
                day: 1000 * 60 * 60 * 24,
                hour: 1000 * 60 * 60,
                minute: 1000 * 60,
                second: 1000,
            };
            const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
            let result;
            // eslint-disable-next-line no-restricted-syntax
            for (const unit in units) {
                if (Math.abs(difference) > units[unit] || unit === 'second') {
                    result = rtf.format(Math.round(difference / units[unit]), unit);
                    break;
                }
            }
            return result;
        };
        Vue.prototype.timezone = (timezone) => {
            const tz = Math.trunc(timezone / 3600);
            const tzRemainder = timezone % 3600;
            const tzm = (tzRemainder !== 0) ? `:${Math.abs(tzRemainder / 60)}` : '';
            return tz > 0 ? `UTC+${tz}${tzm}` : `UTC${tz}${tzm}`;
        };
    },
};

export default DateFormater;
