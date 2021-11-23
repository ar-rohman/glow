import defaults from './defaults';

export const state = {
    alertData: [],
};

let count = 0;
const generateId = () => {
    count += 1;
    return count;
};
export const methods = {
    alert(data) {
        if (typeof data === 'string') {
            data = {
                text: data,
                alertIcon: defaults.alertIcon,
            };
        }
        data.id = generateId();
        data.group = data.group || defaults.group;
        data.alertIcon = (typeof data.alertIcon === 'undefined') ? true : data.alertIcon;
        data.type = data.type || defaults.type;
        data.clean = data.clean || defaults.clean;
        if (data.clean) {
            this.removeAlertByGroup(data.group);
        } else {
            state.alertData.push(data);
        }
        const timeout = data.duration || defaults.duration;
        if (timeout > 0) {
            setTimeout(() => {
                this.removeAlertById(data.id);
            }, timeout);
        }
    },
    removeAlertById(id) {
        state.alertData.splice(state.alertData.findIndex((n) => n.id === id), 1);
    },
    removeAlertByGroup(group) {
        state.alertData.filter((value) => value !== group);
    },
};
