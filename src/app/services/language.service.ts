import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language = new BehaviorSubject('es');
  currentLanguage = this.language.asObservable();

  constructor(private translate: TranslateService) { 
    this.translate.setDefaultLang('es');
  }

  changeLanguage(language: string) {
    this.translate.use(language);
    this.language.next(language);
  }

  get(key: string | Array<string>) {
    return this.translate.get(key);
  }
}
