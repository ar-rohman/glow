import { openDB } from 'idb';

const storeName = process.env.VUE_APP_STORE_NAME;
const objectStoreSetting = process.env.VUE_APP_OBJECT_STORE_SETTING;

const idbObject = openDB(storeName, 1, {
    upgrade(database) {
        database.createObjectStore(objectStoreSetting, { keyPath: 'name' });
        // database.createObjectStore(objectStoreFavorite, { keyPath: 'id' });
    },
});

export default idbObject;
