import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionComponent } from './edition/edition.component';
import { FindIdComponent } from './find-id/find-id.component';
import { ModifyTempComponent } from './modify-temp/modify-temp.component';
import { RouterModule } from '@angular/router';
import { AddTemplateComponent } from './add-template/add-template.component';
import { ShowLitsTempComponent } from './show-lits-temp/show-lits-temp.component';
import { DeleteTempComponent } from './delete-temp/delete-temp.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditionComponent,
    FindIdComponent,
    ModifyTempComponent,
    AddTemplateComponent,
    ShowLitsTempComponent,
    DeleteTempComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class TemplatesModule { }
