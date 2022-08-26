import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { AuxService } from '../services/general.service';
import { PetitionService } from '../services/petition.service';

@Component({
  selector: 'app-excu-info',
  templateUrl: './excu-info.component.html',
  styleUrls: ['./excu-info.component.css']
  
})
export class ExcuInfoComponent implements OnInit {

  constructor(private auxServ:AuxService,
              private petitionServ:PetitionService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }

  // idExcursion  from Services 
 
  get excursion(){
    return this.petitionServ.excursion
  }

  get excursionTemp(){
    return this.petitionServ.excursionTemp
  }

  
 people:number=0

  increase(){
   this.people++  
  }

  decrease(){
    this.people--    
  }

  
  myform:FormGroup= this.fb.group({
    peopleInput:[0,[Validators.required,Validators.min(1),Validators.pattern('^([1-9]+\\d*)|[0]')]],
    
  })
  
 

  addToCar(id:number, price:number) {
    if(this.auxServ._loggedIn){
    if(this.myform.valid){
      let people=this.myform.get('peopleInput')?.value;
      let date=this.auxServ.date;
      let idExcursion=id
      let priceExcursion=price
      this.auxServ.addToCarServ(people,date,idExcursion,priceExcursion)
    }
    else{    
      alert("Rellene todo los campos correctamente")
    }
  }
  else {
    alert("Debe registrarse para reservar")
  }
  }

  goToCart(){
    this.auxServ.goToCart()
  }




  


}
