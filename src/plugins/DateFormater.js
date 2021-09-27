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
            const time = Vue.prototype.time(timestamp);
            const tzOffset = fullDate.getTimezoneOffset();
            const tz = (tzOffset * (-60)) / 3600;
            const timezone = tz > 0 ? `UTC+${tz}` : `UTC${tz}`;
            return `${day}, ${date} ${month} ${year} ${time} ${timezone}`;
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
        Vue.prototype.time = (timestamp) => {
            const df = timestamp * 1000;
            const fullDate = new Date(df);
            const longDateString = fullDate.toString();
            const splitDate = longDateString.split(' ');
            const time = splitDate[4].slice(0, -3);
            return time;
        };
        Vue.prototype.timezone = (timezone) => {
            const tz = timezone / 3600;
            return tz > 0 ? `UTC+${tz}` : `UTC${tz}`;
        };
    },
};

export default DateFormater;
