import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService {
  constructor(private http: Http) {}

  public GetThumbnailUrl(text: string): Observable<string> {
    let encodedText = encodeURI(text);

      return this.http.get(`${environment.imageApiUrl}rt/${encodedText}`)
      .pipe(map(response => {
        if (!response.ok) {
          return null;
        }
        return response.text();
      }));
  }
}
