import { Component, OnInit } from '@angular/core';
import { Excursion_ } from '../interfaces/excursion_';
import { ExcursionsService } from '../services/excursions.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private excursionService:ExcursionsService,
              private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  // get excursionList():Excursion_[] {
  //   return this.excursionService.excursionList
  // }

  // get month(){
  //   return this.excursionService.month
  // }

  // keyWord:string=""
  // resultExcursionFound:Excursion_[]=[]

  // findExcursion(keyWord:string) {
  //   this.excursionService.findExcursionAux(keyWord)


  // }

  searchForm:FormGroup= this.fb.group({
        dateStart:["",[Validators.required]],
        dateEnd:["",[Validators.required]],
  
  });

  
  findExcursions2 () {
   
    if(this.searchForm.valid){
      
      let dateStart=this.searchForm.get('dateStart')?.value
      let dateEnd=this.searchForm.get('dateEnd')?.value

      let  startDateAndTime= new Date(dateStart.year,dateStart.month,dateStart.day,0o0,0o0,0o0)
      let  endDateAndTime=new Date(dateEnd.year,dateEnd.month,dateEnd.day,0o0,0o0,0o0)
    
      this.excursionService.findExcursions2(startDateAndTime,endDateAndTime)
    }

    else {alert('complete todos los campos')}
  

    
  }
    
    
    
    
  
}
