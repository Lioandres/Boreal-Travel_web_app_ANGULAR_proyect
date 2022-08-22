import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiTemplateShow } from '../interfaces/apiTemplateShow.interface';

import { APITempUpdate } from '../interfaces/apiTempUpdate.interface';
import { ApiTemplateShowList, ExcursionTemplate } from '../interfaces/apiTemplateShowList.interface';
import { environment } from '../../environments/environment';
import { ApiShowList, Excursion } from '../interfaces/apiShowList.interface';
import { ApiShow } from '../interfaces/apiShow.interface';
import { APIUpdate } from '../interfaces/apiUpdate.interface';


const baseUrl:string=environment.baseUrl
const headers1 = new HttpHeaders({ 
  
  //'Access-Control-Allow-Origin':'*',
  //'Access-Control-Allow-Headers': 'X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method, Authorization',
  //'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PATCH, PUT, DELETE',
  
  //'Access-Control-Requested-Method':'PUT,POST',
 // 'Content-Type':'application/json/x-www-form-urlencoded',
 //'Content-Length':'<calculated when request is sent>'
});

const body1={
  "title":"sss",
   "img":"dddd",
   "type":"wwww",
   "description":"sssss",
   "price_default":1.20,
   "max_num_people_default":30
}

@Injectable({
  providedIn: 'root'
})


export class PetitionService {

  constructor(private http:HttpClient) { }


  // Template module petitions

showListTemp():Observable<ApiTemplateShowList> {
   return this.http.get<ApiTemplateShowList>(baseUrl+'/api/template/list')
        
}
showExcursionTemp(id:number) {
    return this.http.get<ApiTemplateShow>(baseUrl+'/api/template/show/'+id)
 }


deleteExcursionTemp(id:number) {
  return this.http.delete<ApiTemplateShow>(baseUrl+'/api/template/delete/'+id)
}

addExcursionTemp(excursionData:ExcursionTemplate) {
  return this.http.post<APITempUpdate>(baseUrl+'/api/template/add/',
   {
     "title":excursionData.title,
      "img":excursionData.img,
      "type":excursionData.type,
      "description":excursionData.description,
      "price_default":excursionData.price_default,
      "max_num_people_default":excursionData.max_num_people_default
 },{headers:headers1})
            
 }
 

modifyExcursionTemp(excursionData:ExcursionTemplate) {
 return this.http.put<APITempUpdate>(baseUrl+'/api/template/update/'+excursionData.id_excursion_template,
  {
    "title":excursionData.title,
     "img":excursionData.img,
     "type":excursionData.type,
     "description":excursionData.description,
     "price_default":excursionData.price_default,
     "max_num_people_default":excursionData.max_num_people_default
},{headers:headers1})
           
}

// Excursion Module petitions

showList():Observable<ApiShowList> {
  return this.http.get<ApiShowList>(baseUrl+'/api/excursion/list')
       
}

showExcursion(id:number):Observable<ApiShow> {
  return this.http.get<ApiShow>(baseUrl+'/api/excursion/show/'+id)
}

deleteExcursion(id:number):Observable<ApiShow> {
  return this.http.delete<ApiShow>(baseUrl+'/api/excursion/delete/'+id)
}

modifyExcursion(excursionData:Excursion) {
  return this.http.put<APIUpdate>(baseUrl+'/api/excursion/update/'+excursionData.id_excursion,
   {
     "excursions_template_id":excursionData.excursions_template_id,
      "user_id":excursionData.user_id,
      "num_max_people":excursionData.num_max_people,
      "price":excursionData.price,
      "start":excursionData.start,
      "end":excursionData.end
 },{headers:headers1})
            
 }
          
                             
     

}


