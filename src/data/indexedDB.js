import Dexie from "dexie";

const indexedDB = new Dexie('dengueIDB');
indexedDB.version(1).stores({ complaint: 'id, authorId, street, number, district, description, imgUrl' });

export default indexedDB;