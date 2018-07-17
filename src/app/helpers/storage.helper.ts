export class StorageHelper {

  vocabulariesKey = 'vt-vocabularies';

  public loadVocabularies() {
    JSON.parse(localStorage.getItem(this.vocabulariesKey));
  }
}
