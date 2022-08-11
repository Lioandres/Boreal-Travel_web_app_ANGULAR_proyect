import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';
import { ExcursionTemplate, TemplateList } from '../interfaces/templateList.interface';

@Injectable({
  providedIn: 'root'
})
export class PetitionService {

  constructor(private http:HttpClient) { }

  excursionTemp:ExcursionTemplate={
    id_excursion_template:  "",
    title:                  "",
    img:                    "",
    type:                   "",
    description:            "",
    price_default:          "",
    max_num_people_default: "",
} 
 respShow:Show={
    status: 0,
    error:true,
    messages:"",
    data:this.excursionTemp
}

  id:number=1
 

  getExcursionTemp(id:number) {
    this.http.get<Show>('http://localhost:8080/api/template/show/'+id)
              .subscribe((resp:Show)=>{
                    this.respShow=resp
                               
       })
 }


 excursionListFromAPI:ExcursionTemplate[]=[]
 

 getTempList() {
   this.http.get<TemplateList>('http://localhost:8080/api/template/list')
             .subscribe((resp:TemplateList)=>{
                   this.excursionListFromAPI=resp.data                 
      })
}

 

}
