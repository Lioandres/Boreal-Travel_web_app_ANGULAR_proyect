import { CircleComponent } from './circle/circle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
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
import { FindIdComponent } from './templates/find-id/find-id.component';
import { ModifyTempComponent } from './templates/modify-temp/modify-temp.component';
import { AddTemplateComponent } from './templates/add-template/add-template.component';
import { DeleteTempComponent } from './templates/delete-temp/delete-temp.component';
import { ShowLitsTempComponent } from './templates/show-lits-temp/show-lits-temp.component';

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
  children:[
    {
    path:'findId',
    component: FindIdComponent,
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
}

];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




