import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcuInfoComponent } from './excu-info/excu-info.component';
import { PeopleCounterComponent } from './people-counter/people-counter.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  declarations: [
   ExcuInfoComponent,
   PeopleCounterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
   
  ]
})
export class SelectionModule { }
