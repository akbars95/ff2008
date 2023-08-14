import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotosComponent } from './components/photos/photos.component';
import { VideosComponent } from './components/videos/videos.component';
import { InfoComponent } from './components/info/info.component';
import { PriceComponent } from './components/price/price.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {environment} from "../environments/environment";
import { ContactsComponent } from './components/contacts/contacts.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  console.log("environment.pathToAssets - ", environment.pathToAssets)
  return new TranslateHttpLoader(httpClient);
}

export function createTranslateLoader(http: HttpClient) {
  console.log("environment.pathToAssets - ", environment.pathToAssets)
  return new TranslateHttpLoader(http, `${environment.pathToAssets}/assets/i18n/`, '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    VideosComponent,
    InfoComponent,
    PriceComponent,
    PageNotFoundComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: environment.production ? (createTranslateLoader) : HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
