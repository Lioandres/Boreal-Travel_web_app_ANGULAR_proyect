import { Component, OnInit } from '@angular/core';
import { Excursion } from '../interfaces/interfaces';
import { ExcursionsService } from '../services/excursions.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private excursionService:ExcursionsService) { }

  ngOnInit(): void {
  }

  get excursionList():Excursion[] {
    return this.excursionService.excursionList
  }

  get month(){
    return this.excursionService.month
  }

  keyWord:string=""
  resultExcursionFound:Excursion[]=[]

  findExcursion(keyWord:string) {
    this.excursionService.findExcursionAux(keyWord)
  }
    
    
    
    
  
}
