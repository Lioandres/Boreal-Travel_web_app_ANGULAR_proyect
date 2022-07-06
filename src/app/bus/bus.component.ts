import { Component, OnInit } from '@angular/core';
import { Excursion } from '../interfaces/interfaces';
import { ExcursionsService } from '../services/excursions.service';

@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  constructor(private excursionsService:ExcursionsService) { }

  ngOnInit(): void {
  }

  get excursionList():Excursion[] {
    return this.excursionsService.excursionList
  }

  busExcursionsList:Excursion[]=this.excursionList.filter(item=>item.type==="bus")


}
