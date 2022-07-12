import { Component } from '@angular/core';
import { AuxService } from './services/general.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auxServ:AuxService){}

  get logInUser(){
    return this.auxServ.logInUser
  }

  get loggedIn(){
    return this.auxServ.loggedIn
  }

  logOut(){
    this.auxServ.logOut()
  }

  showNotice(){
    this.auxServ.showNotice()
  }

  title = 'Spring_9_Tasca';
  started:boolean=false
}
