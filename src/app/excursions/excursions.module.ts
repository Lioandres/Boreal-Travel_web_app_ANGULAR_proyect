import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionExcursionComponent } from './edition-excursion/edition-excursion.component';
import { ShowListExcursionComponent } from './show-list-excursion/show-list-excursion.component';
import { ShowExcursionComponent } from './show-excursion/show-excursion.component';
import { ModifyExcursionComponent } from './modify-excursion/modify-excursion.component';
import { DeleteExcursionComponent } from './delete-excursion/delete-excursion.component';
import { AddExcursionComponent } from './add-excursion/add-excursion.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExcursionListComponent } from './excursion-list/excursion-list.component';
import { NgbdDatepickerPopupModule } from '../datepicker/datepicker-popup.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [

    AddExcursionComponent,
    DeleteExcursionComponent,
    ModifyExcursionComponent,
    ShowExcursionComponent,
    ShowListExcursionComponent,
    EditionExcursionComponent,
    ExcursionListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgbdDatepickerPopupModule,
    NgbModule
  ]
})
export class ExcursionsModule { }
