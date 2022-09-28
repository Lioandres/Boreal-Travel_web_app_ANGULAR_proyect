import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterModule } from './footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExcursionsModule } from './excursions/excursions.module';
import { CookieService } from 'ngx-cookie-service';
import { UserModule } from './user/user.module';
import { TypesModule } from './types/types.module';
import { TemplatesModule } from './templates/templates.module';
import { SelectionModule } from './selection/selection.module';
import { SignInModalComponent } from './sign-in-modal/sign-in-modal.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignUpComponent,
    SignInComponent,
    SignInModalComponent,
   
    
      ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

   
    FooterModule,
    ExcursionsModule,
    UserModule,
    TypesModule,
    TemplatesModule,
    SelectionModule   
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
