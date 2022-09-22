import { Component, OnInit } from '@angular/core';
import { Excursion_ } from 'src/app/interfaces/excursion_';
import { ExcursionsService } from 'src/app/services/excursions.service';



@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {

  constructor(private excursionsService:ExcursionsService) { }

  ngOnInit(): void {
  }

  

 


}
