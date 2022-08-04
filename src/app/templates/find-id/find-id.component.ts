import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExcursionTemplate, TemplateList } from 'src/app/interfaces/templateList.interface';

@Component({
  selector: 'app-find-id',
  templateUrl: './find-id.component.html',
  styleUrls: ['./find-id.component.css']
})
export class FindIdComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  excursionTemp:ExcursionTemplate={
    id_excursion_template:  "",
    title:                  "",
    img:                    "",
    type:                   "",
    description:            "",
    price_default:          "",
    max_num_people_default: "",
}

  
  id:number=1
  hit:boolean=false

  getExcursionTemp() {
    this.http.get<TemplateList>('http://localhost:8080/api/template/show/'+this.id)
              .subscribe((resp:TemplateList)=>{
                    this.excursionTemp=resp.data[0]               
       })
 }
}
