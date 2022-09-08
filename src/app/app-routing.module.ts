import { CircleComponent } from './circle/circle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorealComponent } from './boreal/boreal.component';

import { HomeComponent } from './home/home.component';
import { LakeComponent } from './lake/lake.component';
import { BusComponent } from './bus/bus.component';
import { AirportComponent } from './airport/airport.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './footer/about/about.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import { TermsComponent } from './footer/terms/terms.component';
import { CookiesComponent } from './footer/cookies/cookies.component';
import { ExcuInfoComponent } from './excu-info/excu-info.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ResultComponent } from './result/result.component';
import { EditionComponent } from './templates/edition/edition.component';
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
}

];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




