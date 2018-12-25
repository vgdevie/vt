import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { VocabularyComponent, TesterComponent, AppComponent, SettingsComponent, VocabularyListComponent } from './components';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ImageService, TranslatorService } from './services';

const routes: Routes = [
  { path: '', component: VocabularyComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'tester', component: TesterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VocabularyComponent,
    TesterComponent,
    SettingsComponent,
    VocabularyListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ImageService, TranslatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
