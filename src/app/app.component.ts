import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Temps } from './interfaces/temps.interface';
import { AuxService } from './services/general.service';
import { PetitionService } from './services/petition.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auxServ:AuxService,
              private petitionServ:PetitionService,
              private route:Router){}
              
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   this.getWeather()
   this.petitionServ.showListTemp()
   this.petitionServ.showList()
   this.route.events.subscribe((evt) => {
    if (!(evt instanceof NavigationEnd)) {
        return;
    }
    document.body.scrollTop = 0
});


  
  }

 
  icon:string=""
  temp:number=1111

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

  onActivate(event:any) {
    // window.scroll(0,0);
 
    window.scroll({ 
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
     });
 
      document.body.scrollTop = 0;
      document.querySelector('body')!.scrollTo(0,0)
    
 }


  title = 'Reikjavik Excursiones';
  
}
