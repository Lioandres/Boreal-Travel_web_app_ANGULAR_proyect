
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuxService } from '../../services/general.service';

@Component({
  selector: 'app-people-counter',
  templateUrl: './people-counter.component.html',
  styleUrls: ['./people-counter.component.css']
})
export class PeopleCounterComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private auxServ:AuxService) { }

  ngOnInit(): void {
  }

  @Output() peopleNumEvent= new EventEmitter<number>()

 myform:FormGroup= this.fb.group({
    people:[0,[Validators.required,Validators.min(1),Validators.pattern('^([1-9]+\\d*)|[0]')]],
  })   

  increase(){
  
   this.myform.setValue({'people':this.myform.get('people')?.value+1})
  }

  decrease(){
   this.myform.setValue({'people':this.myform.get('people')?.value-1})   
  }  

  sendPeople(){
    this.myform.markAllAsTouched()
    if(this.myform.valid){
      this.peopleNumEvent.emit(this.myform.get('people')?.value)
   
    }
  }


}
