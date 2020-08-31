import Dexie from "dexie";

const indexeddb = new Dexie('dengueIDB');
indexeddb.version(1).stores({ denuncia: 'id, authorId, street, number, district, description, imgUrl' });

export default indexeddb;