import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../environments/environment";
import {CommonServiceService} from "./services/common-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mainImagePath = `${environment.pathToAssets}${environment.contextPath}assets/images/ford.jpeg`

  constructor(public translate: TranslateService, public commonServiceService: CommonServiceService) {
    translate.addLangs(['ro', 'ru']);
    translate.setDefaultLang('ro');

    const browserLang = translate.getBrowserLang();
    console.log("browserLang = ", browserLang)
    // translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
  }

  translateLanguage(lang: string): string {
    if (lang === 'ru') {
      return "language.ru";
    } else {
      return "language.ro";
    }
  }

}
