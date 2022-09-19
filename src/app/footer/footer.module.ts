import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { CookiesComponent } from './cookies/cookies.component';
import { ContactComponent } from './contact/contact.component';
import { GaleriaComponent } from './galeria/galeria.component';



@NgModule({
  declarations: [
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    CookiesComponent,
    ContactComponent,
    GaleriaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FooterModule { }
