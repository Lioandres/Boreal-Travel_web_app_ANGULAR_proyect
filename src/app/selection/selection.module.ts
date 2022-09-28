import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcuInfoComponent } from './excu-info/excu-info.component';
import { PeopleCounterComponent } from './people-counter/people-counter.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultComponent } from './result/result.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PaymentComponent } from './payment/payment.component';
import { CustomDatePipe } from '../Shared/custom.datepipe';






@NgModule({
  declarations: [
   ExcuInfoComponent,
   PeopleCounterComponent,
   ResultComponent,
   ReservationComponent,
   PaymentComponent,
   CustomDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
   
  ]
})
export class SelectionModule { }
