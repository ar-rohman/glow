import idbObject from './createIdb';

const Database = {
    async getData(objectStoreName, id) {
        return (await idbObject).get(objectStoreName, id);
    },
    async getAllData(objectStoreName) {
        return (await idbObject).getAll(objectStoreName);
    },
    async addData(objectStoreName, data) {
        return (await idbObject).add(objectStoreName, data);
    },
    async updateData(objectStoreName, data) {
        return (await idbObject).put(objectStoreName, data);
    },
    async deleteData(objectStoreName, id) {
        return (await idbObject).delete(objectStoreName, id);
    },
};

export default Database;
