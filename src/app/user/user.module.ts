import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditionUserComponent } from './edition-user/edition-user.component';
import { RouterModule } from '@angular/router';
import { PasswordUserComponent } from './password-user/password-user.component';
import { EmailUserComponent } from './email-user/email-user.component';
import { RolUserComponent } from './rol-user/rol-user.component';
import { ShowListUserComponent } from './show-list-user/show-list-user.component';
import { ShowUserComponent } from './show-user/show-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EditionUserComponent,
    ShowUserComponent,
    PasswordUserComponent,
    EmailUserComponent,
    RolUserComponent,
    ShowListUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
