import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { Excursion } from '../interfaces/interfaces';
import { ExcursionsService } from '../services/excursions.service';

@Component({
  selector: 'app-excu-info',
  templateUrl: './excu-info.component.html',
  styleUrls: ['./excu-info.component.css']
  
})
export class ExcuInfoComponent implements OnInit {

  constructor(private excursionsService:ExcursionsService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  
  idExcursion:number=this.excursionsService.id

  get excursionList():Excursion[] {
    return this.excursionsService.excursionList
  }

 people:number=0

  increase(){
   this.people++  
  }

  decrease(){
    this.people--    
  }

  
  myform:FormGroup= this.fb.group({
    peopleInput:[0,[Validators.required,Validators.min(0),Validators.pattern('^([1-9]+\\d*)|[0]')]],
    date:[0,[Validators.required]]
  })




  


}
