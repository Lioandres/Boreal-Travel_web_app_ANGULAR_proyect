import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { Excursion } from '../interfaces/interfaces';
import { ExcursionsService } from '../services/excursions.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { AuxService } from '../services/general.service';

@Component({
  selector: 'app-excu-info',
  templateUrl: './excu-info.component.html',
  styleUrls: ['./excu-info.component.css']
  
})
export class ExcuInfoComponent implements OnInit {

  constructor(private excursionsService:ExcursionsService,
              private auxServ:AuxService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  
  idExcursion:number=this.excursionsService.id

  get excursionList():Excursion[] {
    return this.excursionsService.excursionList
  }

  // ----form component----
  
 people:number=0

  increase(){
   this.people++  
  }

  decrease(){
    this.people--    
  }

  
  myform:FormGroup= this.fb.group({
    peopleInput:[0,[Validators.required,Validators.min(1),Validators.pattern('^([1-9]+\\d*)|[0]')]],
    dateInput:[0,[Validators.required]]
  })
  
 

  addToCar() {
    if(this.auxServ._loggedIn){
    if(this.myform.valid){
      this.auxServ.cart=[this.myform.get('peopleInput')?.value,this.auxServ.date]
      console.log( this.auxServ.cart)
    }
    else{    
      alert("Rellene todo los campos correctamente")
    }
  }
  else {
    alert("Debe registrarse para reservar")
  }
  }




  


}
