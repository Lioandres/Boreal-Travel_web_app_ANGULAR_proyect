import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ExcursionsComponent } from './excursions/excursions.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{
  path:'',
  component:AppComponent,
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

];

@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




