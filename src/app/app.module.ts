import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BusComponent } from './bus/bus.component';
import { BorealComponent } from './boreal/boreal.component';
import { LakeComponent } from './lake/lake.component';
import { CircleComponent } from './circle/circle.component';
import { AirportComponent } from './airport/airport.component';
import { ContactComponent } from './contact/contact.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FooterModule } from './footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ExcuInfoComponent } from './excu-info/excu-info.component';
import { NgbdDatepickerPopupModule } from './datepicker/datepicker-popup.module';
import { GaleriaComponent } from './galeria/galeria.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ResultComponent } from './result/result.component';

import { TemplatesModule } from './templates/templates.module';

import { ExcursionsModule } from './excursions/excursions.module';
import { PeopleCounterComponent } from './people-counter/people-counter.component';
import { PaymentComponent } from './payment/payment.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    BusComponent,
    BorealComponent,
    LakeComponent,
    CircleComponent,
    AirportComponent,
    ContactComponent,
    SignUpComponent,
    SignInComponent,
    ExcuInfoComponent,
    GaleriaComponent,
    ReservationComponent,
    ResultComponent,
    PeopleCounterComponent,
    PaymentComponent,

    
  
    
    
    
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    NgbdDatepickerPopupModule,
    FooterModule,
    TemplatesModule,
    ExcursionsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
