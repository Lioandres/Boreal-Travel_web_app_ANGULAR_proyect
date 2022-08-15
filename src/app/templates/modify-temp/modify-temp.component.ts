import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-modify-temp',
  templateUrl: './modify-temp.component.html',
  styleUrls: ['./modify-temp.component.css']
})
export class ModifyTempComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  modifyTempForm:FormGroup= this.fb.group({
    id:["",[Validators.required,Validators.pattern("[0-9]{1,3}")]],
    title:["",[Validators.required,Validators.maxLength(10)]],
    path:["",[Validators.required]],
    // type:["",[Validators.required]],
    // description:["",[Validators.required]],
    // price:["",[Validators.required]],
    // people:["",[Validators.required]],

  });

  submit(){
    console.log(this.modifyTempForm.get('title'))
  }

}
