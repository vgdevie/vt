import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Vocabulary, Word } from "../../models";
import { TranslatorService , ImageService} from "../../services";
import { SpeechHelper } from "../../helpers";

@Component({
  selector: "app-vocabulary",
  templateUrl: "./vocabulary.component.html"
})
export class VocabularyComponent implements OnInit {
  constructor(private _translatorService: TranslatorService, private _imageService: ImageService) {}

  _speechHelper = new SpeechHelper();

  model: Vocabulary = new Vocabulary();
  newWord: Word = new Word("sand", "");

  @ViewChild("myInput") inputEl: ElementRef;
  @ViewChild("myInputS") inputElS: ElementRef;

  addNewWord() {
    let wordToAdd = new Word(this.newWord.value, this.newWord.translation);
    this.getWordThumbnailAsync(wordToAdd);
    this.model.words.push(wordToAdd);
    this.newWord.translation = "";
    this.newWord.value = "";
    this.inputEl.nativeElement.focus();
  }

  focusTranslation() {
    this.translateNewWordAsync();
    this.inputElS.nativeElement.focus();
  }

  removeWord(index) {
    this.model.words.splice(index, 1);
  }

  speakWord(word: Word) {
    this._speechHelper.speak(word.value, this.model.valueLang);
  }

  ngOnInit(): void {
    this.model.words = [new Word("Test", "Тест"), new Word("Tree", "Дерево")];
    this.model.valueLang = "en";
    this.model.words[1].thumbnailUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaGIRrG4CvK7LDInLnHUT1-OxQBa8zurmhGzAdf-o7JLXlUUxiQvOyMiY';
  }

  getWordThumbnailAsync(word: Word) {
    this._imageService.GetThumbnailUrl(word.value).subscribe(response => {
      word.thumbnailUrl = response;
    });
  }

  translateNewWordAsync() {
    this._translatorService.GetTranslation('en', 'ru', this.newWord.value)
      .subscribe(response => {
        this.newWord.translation = response;
      });
  }
}



