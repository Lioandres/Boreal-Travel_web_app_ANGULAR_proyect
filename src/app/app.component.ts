import { Component } from '@angular/core';
import { Temps } from './interfaces/temps.interface';
import { AuxService } from './services/general.service';
import { HttpClient } from '@angular/common/http';
import { PetitionService } from './services/petition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auxServ:AuxService,
              private petitionServ:PetitionService,
           
                            
              ){}
              
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.getWeather()
   this.petitionServ.showListTemp()
   this.petitionServ.showList()
  
  
  }

 
  icon:string=""
  temp:number=3

  getWeather() {
    this.petitionServ.getWeather()
              .subscribe((resp:Temps)=>{
                    this.icon=resp.weather[0].icon  
                    this.temp=resp.main.temp          
       })
 }



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
