import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { VocabularyComponent, TesterComponent, AppComponent } from './components';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImageService, TranslatorService } from './services';



@NgModule({
  declarations: [
    AppComponent,
    VocabularyComponent,
    TesterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ImageService, TranslatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
