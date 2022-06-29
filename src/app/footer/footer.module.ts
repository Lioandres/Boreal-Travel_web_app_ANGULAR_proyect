import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { CookiesComponent } from './cookies/cookies.component';



@NgModule({
  declarations: [
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    CookiesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
