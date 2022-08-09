import { Component, OnInit } from '@angular/core';
import { ExcursionsService } from 'src/app/services/excursions.service';
import { HttpClient } from '@angular/common/http';
import { ExcursionTemplate, TemplateList } from '../../interfaces/templateList.interface';

@Component({
  selector: 'app-show-lits-temp',
  templateUrl: './show-lits-temp.component.html',
  styleUrls: ['./show-lits-temp.component.css']
})
export class ShowLitsTempComponent implements OnInit {

  constructor(private http:HttpClient) { }


  ngOnInit(): void {

   this.getTempList()
  
  }

 
  excursionListFromAPI:ExcursionTemplate[]=[]
 

  getTempList() {
    this.http.get<TemplateList>('http://localhost:8080/api/template/list')
              .subscribe((resp:TemplateList)=>{
                    this.excursionListFromAPI=resp.data                 
       })
 }

}
