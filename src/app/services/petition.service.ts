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
import { Temps } from '../interfaces/temps.interface';
import { ApiReservationBody } from '../interfaces/apiReservationBody.interface';

import { APIToken } from '../interfaces/apiToken.interface';
import { User } from '../interfaces/user.interface';
import { apiUserMail } from '../interfaces/apiUserMail.interface';
import { apiUserPass } from '../interfaces/apiUserPass.interface';
import { apiUserRole } from '../interfaces/apiUserRole.interface';
import { ApiUser, ApiUserList } from '../interfaces/apiUserList.interface';
import { ApiUserShow } from '../interfaces/apiUserShow.interface';
import { CookieService } from 'ngx-cookie-service';
import { ApiProfile } from '../interfaces/apiProfile.interface';


const baseUrl:string=environment.baseUrl
const headers1 = new HttpHeaders(
   { 
  
//   'Access-Control-Allow-Origin':'*',
//   'Access-Control-Allow-Headers': 'X-API-KEY, Origin,X-Requested-With, Content-Type, Accept, Access-Control-Requested-Method, Authorization',
//   'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PATCH, PUT, DELETE',
  
//   'Access-Control-Requested-Method':'PUT,POST',
//  'Content-Type':'application/json',
//  'Content-Length':'<calculated when request is sent>'
 }
)
headers1.append('Content-Type','application/json')

const body1=
JSON.stringify( 
  {
   title:"sss",
   img:"dddd",
   type:"wwww",
   description:"sssss",
   price_default:1.20,
   max_num_people_default:30
}
)

@Injectable({
  providedIn: 'root'
})


export class PetitionService {

  constructor(private http:HttpClient,
              private cookieService:CookieService) { }

  // whather petitions

  getWeather():Observable<Temps> {
    return this.http.get<Temps>('https://api.openweathermap.org/data/2.5/weather?id=3413829&units=metric&lang=sp&appid=8e42f1a13fa0e057ce270526d580687f')     
       }
 


  // Template module petitions
excursionListTempFromAPI:ExcursionTemplate[]=[]

lookIndexTemp(id_template:string):number{  
  return this.excursionListTempFromAPI.findIndex(excursion=>excursion.id_excursion_template===id_template)
}

showListTemp() {
   this.http.get<ApiTemplateShowList>(baseUrl+'/api/template/list')
    .subscribe((resp:ApiTemplateShowList)=>{this.excursionListTempFromAPI=resp.data})
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
excursionTempFromApi:ApiTemplateShow={
  status: 0,
  error:true,
  messages:"",
  data:this.excursionTemp
}
showExcursionTemp(id:number) {
    this.http.get<ApiTemplateShow>(baseUrl+'/api/template/show/'+id)
     .subscribe((resp:ApiTemplateShow)=>{this.excursionTempFromApi=resp
                                         this.excursionTemp=resp.data})
 }

deleteExcursionTemp(id:number) {
  return this.http.delete<APIUpdate>(baseUrl+'/api/template/delete/'+id)
}

addExcursionTemp(data:ExcursionTemplate) {
  return this.http.post<APITempUpdate>(baseUrl+
  '/api/template/add?title='+data.title+
  '&img='+data.img+
  '&type='+data.type+
  '&description='+data.description+
  '&price_default='+data.price_default+
  '&max_num_people_default='+data.max_num_people_default, 
  body1)
 }
 

modifyExcursionTemp(excursionData:ExcursionTemplate) {
  
  return this.http.post<APITempUpdate>(baseUrl+
        '/api/template/update/'+excursionData.id_excursion_template+
        "?title="+excursionData.title+
        "&img="+excursionData.img+
        "&type="+excursionData.type+
        "&description="+excursionData.description+
        "&price_default="+excursionData.price_default+
        "&max_num_people_default="+excursionData.max_num_people_default,
        JSON.stringify(excursionData))
                  
           
}

// Excursion Module petitions

excursionListFromAPI:Excursion[]=[]
showList() {
   this.http.get<ApiShowList>(baseUrl+'/api/excursion/list')
    .subscribe((resp:ApiShowList)=>{this.excursionListFromAPI=resp.data})
}


excursion:Excursion={
  id_excursion:"",
  excursions_template_id:  "",
  user_id:                  "",
  num_max_people: "",
  price:          "",
  start:          new(Date) ,
  end:            new(Date),
  created_at:     new(Date),
  updated_at:     new(Date)
} 
excursionFromApi:ApiShow={
  status: 0,
  error:true,
  messages:"",
  data:this.excursion
}
showExcursion(id:number) {
  this.http.get<ApiShow>(baseUrl+'/api/excursion/show/'+id)
    .subscribe((resp:ApiShow)=>{this.excursionFromApi=resp
                      this.excursion=resp.data})
}


deleteExcursion(id:number):Observable<APIUpdate> {
  return this.http.delete<APIUpdate>(baseUrl+'/api/excursion/delete/'+id)
}


addExcursion(excursionData:Excursion,start:string,end:string):Observable<APIUpdate> {

  return this.http.post<APIUpdate>(baseUrl+
    '/api/excursion/add?excursions_template_id='+excursionData.excursions_template_id+
    "&user_id="+excursionData.user_id+
    "&num_max_people="+excursionData.num_max_people+
    "&price="+excursionData.price+
    // "&start="+start.getFullYear()+'-'+start.getMonth()+'-'+start.getDay()+' '+start.toLocaleTimeString()+
    // "&end="+end.getFullYear()+'-'+end.getMonth()+'-'+end.getDay()+' '+end.toLocaleTimeString(), 
    "&start="+start+
    "&end="+end,
    JSON.stringify(excursionData))
}
    
    
    
    
    
  
            
 

modifyExcursion(excursionData:Excursion,start:string,end:string):Observable<APIUpdate> {


  return this.http.post<APIUpdate>(baseUrl+
    
    '/api/excursion/update/'+excursionData.id_excursion+
    '?excursions_template_id='+excursionData.excursions_template_id+
    "&user_id="+excursionData.user_id+
    "&num_max_people="+excursionData.num_max_people+
    "&price="+excursionData.price+
    "&start="+start+
    "&end="+end,
    JSON.stringify(excursionData))
            
 }

 addReserve(body:ApiReservationBody):Observable<APIUpdate> {
  return this.http.post<APIUpdate>(baseUrl+
      '/api/reservation/add?excursion_id='+body.excursion_id+
      '&payment_id='+body.payment_id+
      '&name='+body.name+
      '&last_name='+body.last_name+
      '&email='+body.email+
      '&phone='+body.phone+
      '&num_people='+body.num_people,
      JSON.stringify(body))
 }

 addUser(data:User):Observable<APIUpdate> {
    return this.http.post<APIUpdate>(baseUrl+
      '/api/register?user_name='+data.user_name+
      '&user_email='+data.user_email+
      '&user_role='+data.user_role+
      '&user_password='+data.user_password
     
    ,JSON.stringify(data))
   }

   logIn(data:User):Observable<APIToken> {
    return this.http.post<APIToken>(baseUrl+
      '/api/login?user_email='+data.user_email+
      '&user_password='+data.user_password
     
    ,JSON.stringify(data))
   }

   changeMail(data:apiUserMail):Observable<APIUpdate> {
    return this.http.post<APIUpdate>(baseUrl+
      '/api/changeMail?old_email='+data.old_email+
      '&user_email='+data.user_email+
      '&user_password='+data.user_password

    ,JSON.stringify(data))
   }

   changePass(data:apiUserPass):Observable<APIUpdate> {
    return this.http.post<APIUpdate>(baseUrl+
      '/api/changePass?old_password='+data.old_password+
      '&user_email='+data.user_email+
      '&user_password='+data.user_password
     
    ,JSON.stringify(data))
   }

   changeRole(data:apiUserRole):Observable<APIUpdate> {
    return this.http.post<APIUpdate>(baseUrl+
      '/api/changeRole?id_user='+data.id_user+
      '&user_role='+data.user_role
     
    ,JSON.stringify(data))
   }




  userListFromAPI:ApiUser[]=[]
  showListUser() {
      this.http.get<ApiUserList>(baseUrl+'/api/listUser')
                .subscribe((resp:ApiUserList)=>{this.userListFromAPI=resp.data})
 }
  

 
user:ApiUser= {
    id_user: 0,
    user_name: "",
    user_email: "",
    user_password: "",
    user_role: "",
    created_at: new Date(),
    updated_at: new Date()
}

userFromApi: ApiUserShow= {
    status:   0,
    error:    false,
    messages: "",
    data:     this.user
}

 showUser(id:number) {
  this.http.get<ApiUserShow>(baseUrl+'/api/showUser/'+id)
   .subscribe((resp:ApiUserShow)=>{this.userFromApi=resp
                                    this.user=resp.data})
}

getProfile() {
  let headers2=new HttpHeaders(
    {  
      //'Authorization': 'Bearer ' + this.cookieService.get('token'),
      // 'Origin': 'http://localhost:4200',
      // 'Access-Control-Request-Methods': 'GET',
      // 'Access-Control-Request-Headers': 'Authorization'

  })
  const headers3= {  
    //'Authorization': 'Bearer ' + this.cookieService.get('token'),
    //'Origin': 'http://localhost:4200',
    'Access-Control-Request-Methods': 'GET',
    'Access-Control-Request-Header': 'Authorization'

}
    this.http.get<ApiProfile>(baseUrl + "/api/profile",{headers:headers3})
        .subscribe((resp:ApiProfile)=>console.log(resp));
}

excursionListFromId:Excursion[]=[]
getChosenExcursions(idTemp:string) {
  this.excursionListFromId=this.excursionListFromAPI.filter(item=>item.excursions_template_id===idTemp)
}


   }






