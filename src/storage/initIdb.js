import Database from './storageIdb';

const initIdb = {
    async init() {
        const objectStoreSetting = process.env.VUE_APP_OBJECT_STORE_SETTING;
        const location = await Database.getData(objectStoreSetting, 'location');
        const temp = await Database.getData(objectStoreSetting, 'temperature');
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
    },
};
export default initIdb;
