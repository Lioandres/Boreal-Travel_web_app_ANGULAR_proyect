import {Component, forwardRef} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-datepicker-popup',
  templateUrl: './datepicker-popup.html',
  providers:[
    {
      provide:NG_VALUE_ACCESSOR,
      useExisting:forwardRef(()=> NgbdDatepickerPopup),
      multi:true
    }
  ]
})
export class NgbdDatepickerPopup implements ControlValueAccessor{
  model: NgbDateStruct | undefined;

  showModel(){
    console.log(this.model)
  }



  onChange:any =() => {}
  onTouch:any=()=>{}
  disabled:boolean=false
  
  writeValue(valueI:NgbDateStruct):void{
  this.model=valueI
  
  }
  
  registerOnChange(fn:any):void{
    this.onChange=fn  //Call to the same function onChange
  }
  
  
  registerOnTouched(fn:any):void{
    this.onTouch=fn
  }
  
  SetDissableState (state:boolean):void{
    this.disabled=state
  }


}
