import Database from './storageIdb';

const initIdb = {
    async init() {
        const objectStoreSetting = process.env.VUE_APP_OBJECT_STORE_SETTING;
        const location = await Database.getData(objectStoreSetting, 'location');
        if (!location || !location.value) {
            Database.updateData(objectStoreSetting, {
                name: 'location',
                value: 'Jakarta',
            });
        }
    },
};
export default initIdb;
