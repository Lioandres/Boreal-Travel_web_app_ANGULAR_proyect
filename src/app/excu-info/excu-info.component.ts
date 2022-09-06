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
              private auxServ:AuxService,
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
    this.auxServ.addToCart(this.excursion,eventData)
    this.route.navigate(['reservation']) 
  }
 
  
}
