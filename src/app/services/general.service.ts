import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Excursion } from '../interfaces/apiShowList.interface';
import { Cart } from '../interfaces/cart.interface';





@Injectable({
  providedIn: 'root'
})
export class AuxService {

  constructor(private route:Router) {

    }


repositoryCart: Cart[] = []

addToCart(excursionChosen:Excursion,numberChosen:number) {
    let item={excursion:excursionChosen,
              numberPeople:numberChosen,
              totalPrice:parseInt(excursionChosen.price)*numberChosen}
    this.repositoryCart.push(item)
}


  logInUser:string='LOG IN'
  logInUserRole:string=""
  loggedIn:boolean=false
  id_user:number=0


  logOut() {
    if(this.loggedIn===true){
      this.logInUser='LOG IN'
      this.loggedIn=false
      
    }
  }


  _date: NgbDateStruct| undefined;

  setDate(date: NgbDateStruct | undefined){
    this._date=date
    console.log(this._date)
  }

  get date (){
    return this._date
  }

  cart:[number, NgbDateStruct|undefined]|undefined


 


  goToCart(){
    if(this.loggedIn) 
    this.route.navigate(['reservation'])
  }


 

  






 

}
