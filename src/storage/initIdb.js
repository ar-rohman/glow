import Database from './storageIdb';

const initIdb = {
    async init() {
        const objectStoreSetting = process.env.VUE_APP_OBJECT_STORE_SETTING;
        const location = await Database.getData(objectStoreSetting, 'location');
        const temp = await Database.getData(objectStoreSetting, 'temperature');
        const theme = await Database.getData(objectStoreSetting, 'theme');
        const language = await Database.getData(objectStoreSetting, 'language');
        if (!location || !location.value) {
            Database.updateData(objectStoreSetting, {
                name: 'location',
                value: 'Jakarta',
            });
        }
        if (!temp || !temp.value) {
            Database.updateData(objectStoreSetting, {
                name: 'temperature',
                value: 'celsius',
            });
        }
        if (!theme || !theme.value) {
            Database.updateData(objectStoreSetting, {
                name: 'theme',
                value: 'default',
            });
        }
        if (!language || !language.value) {
            Database.updateData(objectStoreSetting, {
                name: 'language',
                value: 'en',
            });
        }
    },
};
export default initIdb;
