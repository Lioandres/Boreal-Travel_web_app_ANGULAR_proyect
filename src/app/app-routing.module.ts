
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';



import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './footer/contact/contact.component';
import { AboutComponent } from './footer/about/about.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { TermsComponent } from './footer/terms/terms.component';
import { CookiesComponent } from './footer/cookies/cookies.component';


import { ReservationComponent } from './reservation/reservation.component';
import { ResultComponent } from './result/result.component';

import { ModifyTempComponent } from './templates/modify-temp/modify-temp.component';
import { AddTemplateComponent } from './templates/add-template/add-template.component';
import { DeleteTempComponent } from './templates/delete-temp/delete-temp.component';
import { ShowLitsTempComponent } from './templates/show-lits-temp/show-lits-temp.component';
import { ShowExcursionTempComponent } from './templates/show-excursion-temp/show-excursion-temp.component';
import { EditionExcursionComponent } from './excursions/edition-excursion/edition-excursion.component';
import { ShowExcursionComponent } from './excursions/show-excursion/show-excursion.component';
import { ModifyExcursionComponent } from './excursions/modify-excursion/modify-excursion.component';
import { AddExcursionComponent } from './excursions/add-excursion/add-excursion.component';
import { DeleteExcursionComponent } from './excursions/delete-excursion/delete-excursion.component';
import { ShowListExcursionComponent } from './excursions/show-list-excursion/show-list-excursion.component';
import { ExcuInfoTempComponent } from './templates/excu-info-temp/excu-info-temp.component';
import { EditGuard } from './guards/edit.guard';
import { EditionComponent } from './templates/edition/edition.component';
import { EditionUserComponent } from './user/edition-user/edition-user.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { PasswordUserComponent } from './user/password-user/password-user.component';
import { EmailUserComponent } from './user/email-user/email-user.component';
import { RolUserComponent } from './user/rol-user/rol-user.component';
import { ShowListUserComponent } from './user/show-list-user/show-list-user.component';
import { AdminGuard } from './guards/admin.guard';
import { BorealComponent } from './types/boreal/boreal.component';
import { LakeComponent } from './types/lake/lake.component';
import { CircleComponent } from './types/circle/circle.component';
import { AirportComponent } from './types/airport/airport.component';
import { BusComponent } from './types/bus/bus.component';
import { GaleriaComponent } from './footer/galeria/galeria.component';
import { ExcuInfoComponent } from './selection/excu-info/excu-info.component';

const routes: Routes = [

{
  path:'',
  component:HomeComponent,
  pathMatch:'full'
},

{
  path:'home',
  component:HomeComponent,
  pathMatch:'full'
},


{
  path:'boreal',
  component:BorealComponent,
  pathMatch:'full'
},

{
  path:'lake',
  component: LakeComponent,
  pathMatch:'full'
},
{
  path:'circle',
  component: CircleComponent,
  pathMatch:'full'
},

{
  path:'airport',
  component: AirportComponent,
  pathMatch:'full'
},

{
  path:'bus',
  component: BusComponent,
  pathMatch:'full'
},
{
  path:'contact',
  component: ContactComponent,
  pathMatch:'full'
},
{
  path:'signUp',
  component: SignUpComponent,
  pathMatch:'full'
},
{
  path:'signIn',
  component: SignInComponent,
  pathMatch:'full'
},
{
  path:'about',
  component: AboutComponent,
  pathMatch:'full'
},
{
  path:'privacy',
  component: PrivacyComponent,
  pathMatch:'full'
},
{
  path:'terms',
  component: TermsComponent,
  pathMatch:'full'
},
{
  path:'cookies',
  component: CookiesComponent,
  pathMatch:'full'
},

{
  path:'excuInfo',
  component: ExcuInfoComponent,
  pathMatch:'full'
},
{
  path:'excuInfoTemp',
  component: ExcuInfoTempComponent,
  pathMatch:'full'
},
{
  path:'galeria',
  component: GaleriaComponent,
  pathMatch:'full'
},
{
  path:'reservation',
  component: ReservationComponent,
  pathMatch:'full'
},

{
  path:'result',
  component: ResultComponent,
  pathMatch:'full'
},

{
  path:'edition',
  component: EditionComponent,
  canActivate:[EditGuard],
  children:[
    {
    path:'showTemp',
    component: ShowExcursionTempComponent,
     pathMatch:'full'
  },
    {
    path:'modify',
    component: ModifyTempComponent,
    pathMatch:'full'
  },
  {
    path:'addTemplate',
    component: AddTemplateComponent,
     pathMatch:'full'
  },
  {
    path:'deleteTemp',
    component: DeleteTempComponent,
     pathMatch:'full'
  },
  {
    path:'showTempList',
    component: ShowLitsTempComponent,
     pathMatch:'full'
  }]
},
{
  path:'editionExcursion',
  component: EditionExcursionComponent,
  canActivate:[EditGuard],
  children:[
    {
    path:'showExcursion',
    component: ShowExcursionComponent,
     pathMatch:'full'
  },
    {
    path:'modifyExcursion',
    component: ModifyExcursionComponent,
    pathMatch:'full'
  },
  {
    path:'addExcursion',
    component: AddExcursionComponent,
     pathMatch:'full'
  },
  {
    path:'deleteExcursion',
    component: DeleteExcursionComponent,
     pathMatch:'full'
  },
  {
    path:'showListExcursion',
    component: ShowListExcursionComponent,
     pathMatch:'full'
  }]
},
{
  path:'editionUser',
  component: EditionUserComponent,
  canActivate:[EditGuard],
  children:[
    {
    path:'showUser',
    component: ShowUserComponent,
     pathMatch:'full'
  },
    {
    path:'passwordUser',
    component: PasswordUserComponent,
    pathMatch:'full'
  },
  {
    path:'emailUser',
    component: EmailUserComponent,
     pathMatch:'full'
  },
  {
    path:'rolUser',
    component: RolUserComponent,
    canActivate:[AdminGuard],
    pathMatch:'full'
  },
  {
    path:'listUser',
    component: ShowListUserComponent,
    canActivate:[AdminGuard],
    pathMatch:'full'
  }]
}

];

@NgModule({
 
  imports: [RouterModule.forRoot(routes,
   {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 0]
    }
                        )],
  exports: [RouterModule]
})
export class AppRoutingModule { }




