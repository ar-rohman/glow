const DateFormater = {
    install(Vue) {
        Vue.prototype.longFullDate = (timestamp) => {
            const df = timestamp * 1000;
            const fullDate = new Date(df);
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

            const day = days[fullDate.getDay()];
            const date = (`0${fullDate.getDate()}`).slice(-2);
            const month = months[fullDate.getMonth()];
            const year = fullDate.getFullYear();
            // const time = Vue.prototype.time(timestamp);
            const hours = (`0${fullDate.getHours()}`).slice(-2);
            const minutes = (`0${fullDate.getMinutes()}`).slice(-2);
            const tzOffset = fullDate.getTimezoneOffset();
            const tz = (tzOffset * (-60)) / 3600;
            const timezone = tz > 0 ? `UTC+${tz}` : `UTC${tz}`;
            return `${day}, ${date} ${month} ${year} ${hours}:${minutes} ${timezone}`;
        };
        Vue.prototype.threeLetterDay = (timestamp) => {
            const df = timestamp * 1000;
            const fullDate = new Date(df);
            const longDateString = fullDate.toString();
            const splitDate = longDateString.split(' ');
            const day = splitDate[0];
            const month = splitDate[1];
            const date = splitDate[2];
            const year = splitDate[3];
            return `${day}, ${date} ${month} ${year}`;
        };
        Vue.prototype.shortDate = (timestamp) => {
            const df = timestamp * 1000;
            const fullDate = new Date(df);
            const date = fullDate.getDate();
            const month = fullDate.getMonth() + 1;
            const year = (fullDate.getFullYear()).toString().slice(-2);
            return `${date}/${month}/${year}`;
        };
        // Return time in the city or location you are looking for
        Vue.prototype.time = (timestamp, timezone) => {
            // const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
            // const df = timestamp * 1000;
            // const fullDate = new Date(df);
            // const utcTime = fullDate.getTime();
            const timezones = 25200;
            const fullDate = new Date((timestamp * 1000) + (timezones * 1000));
            console.log(timezone);
            // const fullDate =
            // new Date((new Date(df)).toLocaleString('en-US', { timeZone: timezone }));
            const longDateString = fullDate.toString();
            const splitDate = longDateString.split(' ');
            const time = splitDate[4].slice(0, -3);
            return time;
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
            const tz = timezone / 3600;
            return tz > 0 ? `UTC+${tz}` : `UTC${tz}`;
        };
    },
};

export default DateFormater;
