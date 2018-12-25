import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { DexieVtService } from "./dexie.vt.service";
import { Voca, Word } from "../models";
import { Dexie } from 'dexie';

@Injectable()
export class VocaService {

  private _vocas: Dexie.Table<Voca, number>;
  private _words: Dexie.Table<Word, number>;

  constructor(private dexieVtService: DexieVtService) {
    dexieVtService.open();
    this._vocas = dexieVtService.table('vocas');
    this._words = dexieVtService.table('words');
  }

  getAllVocas(): Promise<Voca[]> {
    return this._vocas.toArray();
  }

  addVoca(voca: Voca): Promise<number> {
    const now = new Date().getTime();
    voca.timeAdded = now;
    voca.timeModified = now;
    voca.id = null;
    return this._vocas.add(voca);
  }

  updateVoca(voca: Voca): Promise<number> {
    const now = new Date().getTime();
    voca.timeModified = now;
    return this._vocas.put(voca);
  }

  async deleteVoca(vocaId:number): Promise<void> {
    await this._words.where({vocaId: vocaId}).delete();
    return this._vocas.delete(vocaId);
  }

  getVocaWords(vocaId: number): Promise<Word[]> {
    return this._words.where({vocaId: vocaId}).toArray();
  }

  addWord(word: Word): Promise<number> {
    const now = new Date().getTime();
    word.timeAdded = now;
    word.timeModified = now;
    word.id = null;
    return this._words.add(word);
  }

  updateWord(word: Word): Promise<number> {
    const now = new Date().getTime();
    word.timeModified = now;
    return this._words.put(word);
  }

  deleteWord(wordId: number): Promise<void> {
    return this._words.delete(wordId);
  }
}
