// Return date & time to local city currently displayed
const DateFormater = {
    install(Vue) {
        Vue.prototype.currentFullDate = (language) => {
            const fullDate = new Date();
            const tz = Intl.DateTimeFormat().resolvedOptions().timeZone; // eg. Asia/Jakarta
            const locale = language === 'id' ? 'id-ID' : navigator.language;
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour12: false,
                hour: 'numeric',
                minute: 'numeric',
                timeZoneName: 'short',
                timeZone: tz,
            };
            return (new Intl.DateTimeFormat(locale, options).format(fullDate));
        };
        Vue.prototype.threeLetterDay = (timestamp, timezone, language) => {
            const utcFullDate = new Date((timestamp * 1000) + (timezone * 1000));
            const options = {
                weekday: 'short',
                year: '2-digit',
                month: 'short',
                day: 'numeric',
                timeZone: 'GMT',
            };
            return (new Intl.DateTimeFormat(language, options).format(utcFullDate));
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
        Vue.prototype.timeFromNow = (timestamp, language) => {
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
            const rtf = new Intl.RelativeTimeFormat(language, { numeric: 'auto' });
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
