import { CircleComponent } from './circle/circle.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BorealComponent } from './boreal/boreal.component';
import { ExcursionsComponent } from './excursions/excursions.component';
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
  path:'excursionsList',
  component:ExcursionsComponent,
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

];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




