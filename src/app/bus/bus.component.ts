import { Component, OnInit } from '@angular/core';
import { Excursion_ } from '../interfaces/excursion_';
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

  get excursionList():Excursion_[] {
    return this.excursionsService.excursionList
  }

  busExcursionsList:Excursion_[]=this.excursionList.filter(item=>item.type==="bus")


}
