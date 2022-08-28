import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuxService } from '../services/general.service';
import { PetitionService } from '../services/petition.service';

@Component({
  selector: 'app-excu-info',
  templateUrl: './excu-info.component.html',
  styleUrls: ['./excu-info.component.css']
  
})
export class ExcuInfoComponent implements OnInit {

  constructor(private petitionServ:PetitionService,
              private route:Router,
             ) { }

  ngOnInit(): void {
    
  }

 
  get excursion(){
    return this.petitionServ.excursion
  }

  get excursionTemp(){
    return this.petitionServ.excursionTemp
  }

  toReserve(eventData:number){
    this.route.navigate(['reservation']) 
    console.log(eventData, 'ese fue el numero de personas recivofdos de la reserva')
  }
 
  
}
