import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  constructor(private http: Http) {}

  public GetTranslation(sourceLang: string, targetLang: string, text: string): Observable<string> {

    let encodedText = encodeURI(text);

    sourceLang = sourceLang || '';

    return this.http
      .get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodedText}`)
      .pipe(map(response => {
        if (!response.ok) {
          return '';
        }
        return response.json()[0][0][0];
      }));
  }
}
