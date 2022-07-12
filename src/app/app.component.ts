import { Component } from '@angular/core';
import { Temps } from './interfaces/temps.interface';
import { AuxService } from './services/general.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auxServ:AuxService,
              private http:HttpClient
                            
              ){}
              
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.getWeather()
  
  }

 
  icon:string=""
  temp:number=3

  getWeather() {
    this.http.get<Temps>('https://api.openweathermap.org/data/2.5/weather?id=3413829&units=metric&lang=sp&appid=8e42f1a13fa0e057ce270526d580687f')
              .subscribe((resp:Temps)=>{
                    console.log(resp.weather[0].icon)
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
