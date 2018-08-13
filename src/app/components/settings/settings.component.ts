import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Vocabulary, Word } from "../../models";
import { TranslatorService , ImageService} from "../../services";
import { SpeechHelper } from "../../helpers";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html"
})
export class SettingsComponent implements OnInit {
  constructor(private _translatorService: TranslatorService, private _imageService: ImageService) {}

  ngOnInit(): void {
  }

}
