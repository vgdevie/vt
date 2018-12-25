import { DexieVtService, VocaService } from "../services";
import { Voca } from "../models";

export class InitialHelper {
    constructor(private _vocaService: VocaService) {}

    async addInitialVocaIfRequired() {
        let initialVoca1 = new Voca();
        initialVoca1.title = "Фрукты";
        initialVoca1.description = "Сочные съедобные плоды дерева или кустарника";
        initialVoca1.imageBase64 = "https://cdn.st100sp.com/cache_pictures/040898953/thumb300";

        await this._vocaService.addVoca(initialVoca1);
    }
}