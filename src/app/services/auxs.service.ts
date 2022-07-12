import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Temps } from '../interfaces/temps.interface';


import { Users } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuxService {


  constructor(private route: Router,
              private http: HttpClient
              ) {
this._userRepository = JSON.parse(localStorage.getItem('users')!) || [];
}

pageInfo = '';


_userRepository: Users[] = [{ userName: '', userMail: '', userpassword: '' }];

get userRepository() {
return [...this._userRepository];
}

_logInUser:string='LOG IN'
_loggedIn:boolean=false

get logInUser():string{
return this._logInUser
}

get loggedIn():boolean{
return this._loggedIn
}

signUp(userInput: Users) {
if (
!this._userRepository.find((user) => user.userName === userInput.userName) &&
!this._userRepository.find((user) => user.userMail === userInput.userMail)
) {
this._userRepository.push(userInput);
localStorage.setItem('users', JSON.stringify(this._userRepository));
this.route.navigate(['home'])
this._logInUser=`Bienvenido ${userInput.userName}`
this._loggedIn=true
} else alert('el usuario o email ya existen');
}

logIn(name:string,password:string) {

if (
this._userRepository.find((user) => user.userName === name) &&
this._userRepository.find((user) => user.userpassword === password)
) {
this.route.navigate(['home'])
this._logInUser=`Bienvenido ${name}`
this._loggedIn=true
} else alert('el usuario o contraseña es incorrecto');
}

logOut() {
if(this.loggedIn===true){
this._logInUser='LOG IN'
this._loggedIn=false
console.log('logeado:', false)
}
}

showNotice(){
if(!this.loggedIn) {
alert('Debe hacer log-in para acceder')
this.route.navigate(['signIn'])
}
}


_iconWeather:string="";
_tempWeather:number=0;
getWeather() {
  this.http.get<Temps>('https://api.openweathermap.org/data/2.5/weather?id=3128760&units=metric&lang=sp&appid=8e42f1a13fa0e057ce270526d580687f')
    .subscribe((resp:Temps) => {
     console.log(resp);
      this._iconWeather= `${resp.weather[0].icon}` 
      this._tempWeather=resp.main.temp
      console.log(this._iconWeather,this._tempWeather)

    });

 
 
}
get iconWeather() {
  return this._iconWeather
}

get tempWeather() {
  return this._tempWeather
}



}
