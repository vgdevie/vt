import Dexie from 'dexie';

export class DexieVtService extends Dexie {
    constructor() {
        super('vt');
        this.version(1).stores({
            vocas: '++id,timeAdded,timeModified,valueLang,translaionLang',
            words: '++id,timeAdded,timeModified,vocaId,testFails,testTotal,mark'
        });
    }
}