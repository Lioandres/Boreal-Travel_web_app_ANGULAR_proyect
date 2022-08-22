import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionComponent } from './edition/edition.component';
import { ModifyTempComponent } from './modify-temp/modify-temp.component';
import { RouterModule } from '@angular/router';
import { AddTemplateComponent } from './add-template/add-template.component';
import { ShowLitsTempComponent } from './show-lits-temp/show-lits-temp.component';
import { DeleteTempComponent } from './delete-temp/delete-temp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowExcursionTempComponent } from './show-excursion-temp/show-excursion-temp.component';



@NgModule({
  declarations: [
    EditionComponent,
    ShowExcursionTempComponent,
    ModifyTempComponent,
    AddTemplateComponent,
    ShowLitsTempComponent,
    DeleteTempComponent,
    ShowExcursionTempComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class TemplatesModule { }
