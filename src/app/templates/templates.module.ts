import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionComponent } from './edition/edition.component';
import { FindIdComponent } from './find-id/find-id.component';
import { ModifyTempComponent } from './modify-temp/modify-temp.component';
import { RouterModule } from '@angular/router';
import { AddTemplateComponent } from './add-template/add-template.component';



@NgModule({
  declarations: [
    EditionComponent,
    FindIdComponent,
    ModifyTempComponent,
    AddTemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class TemplatesModule { }
