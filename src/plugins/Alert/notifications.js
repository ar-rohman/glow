import defaults from './defaults';

export const state = {
    alertData: [],
    alertGroupData: {},
};

let count = 0;
const generateId = () => {
    count += 1;
    return count;
};
export const methods = {
    alert(data) {
        const alerts = {};
        // const alertGroups = {};
        // data.id = generateId();
        // notification.group = notification.group || defaults.group;
        // Object.assign(alertGroups, {
        Object.assign(state.alertGroupData, {
            group: data.group || defaults.group,
            position: data.position || defaults.position,
        });
        // notification.alertIcon = notification.alertIcon || true;
        Object.assign(alerts, {
            id: generateId(),
            group: data.group || defaults.group,
            title: data.title,
            text: data.text,
        });
        // state.alertGroupData.push(alertGroups);
        state.alertData.push(alerts);
        const timeout = data.duration || defaults.duration;
        if (timeout > 0) {
            setTimeout(() => {
                this.removeNotification(data.id);
            }, timeout);
        }
    },
    removeNotification(id) {
        state.alertData.splice(state.alertData.findIndex((n) => n.id === id), 1);
    },
};
