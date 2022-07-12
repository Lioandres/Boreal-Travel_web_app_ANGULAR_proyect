import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../interfaces/user.interface';



@Injectable({
  providedIn: 'root'
})
export class AuxService {

  constructor(private route:Router) {
    this._userRepository = JSON.parse(localStorage.getItem('users')!) || [];
    }

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
    //this.route.navigate(['logIn'])
    }
  }
 
}
