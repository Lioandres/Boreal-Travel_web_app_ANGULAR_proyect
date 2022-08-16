import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Show } from '../interfaces/show.interface';
import { ExcursionTemplate, TemplateList } from '../interfaces/templateList.interface';
import { ExcursionsService } from './excursions.service';

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


modifyExcursionTemp() {
  this.http.put<Show>('http://localhost:8080/api/template/update/20',
  {
    "title":"sss",
     "img":"dddd",
     "type":"wwww",
     "description":"sssss",
     "price_default":1.20,
     "max_num_people_default":30
})
            .subscribe((resp:Show)=>{
                  this.respShow=resp
                  console.log(this.respShow.data)
                             
     })
}

// modifyExcursionTemp(id:number,title:string,img:string,type:string,description:string,price_default:number,max_num_people_default:number) {
//   this.http.put<Show>('http://localhost:8080/api/template/update/'+id,
//   {
//     "title":title,
//      "img":img,
//      "type":type,
//      "description":description,
//      "price_default":price_default,
//      "max_num_people_default":max_num_people_default
// })
//             .subscribe((resp:Show)=>{
//                   this.respShow=resp
//                   console.log(this.respShow.data)
                             
//      })
// }

// modifyExcursionTemp(excursionData:ExcursionTemplate) {
//   this.http.put<Show>('http://localhost:8080/api/template/update/'+excursionData.id_excursion_template,{
//     "title":excursionData.title,
//      "img":excursionData.img,
//      "type":excursionData.type,
//      "description":excursionData.description,
//      "price_default":excursionData.price_default,
//      "max_num_people_default":excursionData.max_num_people_default
// })
//             .subscribe((resp:Show)=>{
//                   this.respShow=resp
//                   console.log(this.respShow.data)
                             
//      })
// }


 

}
function body<T>(arg0: string, body: any, arg2: { title: any; img: any; description: any; type: any; price: any; }) {
  throw new Error('Function not implemented.');
}

