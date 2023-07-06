import { Component } from '@angular/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.get('hello').subscribe((res: string) => {
      console.log(res);
    });
  }

  switchLanguage(language: string) {
    this.languageService.changeLanguage(language);
  }
}
