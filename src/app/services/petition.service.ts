import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiTemplateShow } from '../interfaces/apiTemplateShow.interface';

import { APITempUpdate } from '../interfaces/apiTempUpdate.interface';
import {
  ApiTemplateShowList,
  ExcursionTemplate,
} from '../interfaces/apiTemplateShowList.interface';
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
import { ApiAddReser } from '../interfaces/apiAddReser.interface';

const baseUrl: string = environment.baseUrl;


@Injectable({
  providedIn: 'root',
})
export class PetitionService {
  constructor(private http: HttpClient) { }

  // wheather petitions

  getWeather(): Observable<Temps> {
    return this.http.get<Temps>(
      'https://api.openweathermap.org/data/2.5/weather?id=3413829&units=metric&lang=sp&appid=8e42f1a13fa0e057ce270526d580687f'
    );
  }

  // Template module petitions
  excursionListTempFromAPI: ExcursionTemplate[] = [];

  lookIndexTemp(id_template: string): number {
    return this.excursionListTempFromAPI.findIndex(
      (excursion) => excursion.id_excursion_template === id_template
    );
  }

  excursionListFromId: Excursion[] = [];
  getChosenExcursions(idTemp: string) {
    this.excursionListFromId = this.excursionListFromAPI.filter(
      (item) => item.excursions_template_id === idTemp
    );
  }

  showListTemp() {
    this.http
      .get<ApiTemplateShowList>('/api/template/list')
      .subscribe((resp: ApiTemplateShowList) => {
        this.excursionListTempFromAPI = resp.data;
      });
  }

  excursionTemp: ExcursionTemplate = {
    id_excursion_template: '',
    title: '',
    img: '',
    type: '',
    description: '',
    price_default: '',
    max_num_people_default: '',
  };
  excursionTempFromApi: ApiTemplateShow = {
    status: 0,
    error: true,
    messages: '',
    data: this.excursionTemp,
  };
  showExcursionTemp(id: number) {
    this.http
      .get<ApiTemplateShow>('/api/template/show/' + id)
      .subscribe((resp: ApiTemplateShow) => {
        this.excursionTempFromApi = resp;
        this.excursionTemp = resp.data;
      });
  }

  deleteExcursionTemp(id: number) {
    return this.http.delete<APIUpdate>('/api/template/delete/' + id);
  }

  addExcursionTemp(body: ExcursionTemplate) {
    return this.http.post<APITempUpdate>('/api/template/add', body);
  }

  modifyExcursionTemp(body: ExcursionTemplate) {
    return this.http.post<APITempUpdate>(
      '/api/template/update/' + body.id_excursion_template,
      body
    );
  }

  // Excursion Module petitions

  excursionListFromAPI: Excursion[] = [];
  showList() {
    this.http
      .get<ApiShowList>('/api/excursion/list')
      .subscribe((resp: ApiShowList) => {
        this.excursionListFromAPI = resp.data;
      });
  }

  excursion: Excursion = {
    id_excursion: '',
    excursions_template_id: '',
    user_id: '',
    num_max_people: '',
    price: '',
    start: new Date(),
    end: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
  };
  excursionFromApi: ApiShow = {
    status: 0,
    error: true,
    messages: '',
    data: this.excursion,
  };
  showExcursion(id: number) {
    this.http
      .get<ApiShow>('/api/excursion/show/' + id)
      .subscribe((resp: ApiShow) => {
        
        this.excursionFromApi = resp;
        this.excursion = resp.data;
        
        
          
                
      }) ;
  }

  deleteExcursion(id: number): Observable<APIUpdate> {
    return this.http.delete<APIUpdate>('/api/excursion/delete/' + id);
  }

  addExcursion(
    body: Excursion,
    start: string,
    end: string
  ): Observable<APIUpdate> {
    return this.http.post<APIUpdate>('/api/excursion/add', {
      excursions_template_id: body.excursions_template_id,
      user_id: body.user_id,
      num_max_people: body.num_max_people,
      price: body.price,
      start: start,
      end: end,
    });
  }

  modifyExcursion(
    body: Excursion,
    start: string,
    end: string
  ): Observable<APIUpdate> {
    return this.http.post<APIUpdate>(
      '/api/excursion/update/' + body.id_excursion,
      {
        excursions_template_id: body.excursions_template_id,
        user_id: body.user_id,
        num_max_people: body.num_max_people,
        price: body.price,
        start: start,
        end: end,
      }
    );
  }

  addReserve(body: ApiReservationBody): Observable<ApiAddReser> {
    return this.http.post<ApiAddReser>('/api/reservation/add', body);
  }

  addUser(body: User): Observable<APIUpdate> {
    return this.http.post<APIUpdate>('/api/register', body);
  }

  logIn(body: User): Observable<APIToken> {
    return this.http.post<APIToken>('/api/login', body);
  }

  changeMail(body: apiUserMail): Observable<APIUpdate> {
    return this.http.post<APIUpdate>('/api/changeMail', body);
  }

  changePass(body: apiUserPass): Observable<APIUpdate> {
    return this.http.post<APIUpdate>('/api/changePass', body);
  }

  changeRole(body: apiUserRole): Observable<APIUpdate> {
    return this.http.post<APIUpdate>('/api/changeRole', body);
  }

  userListFromAPI: ApiUser[] = [];
  showListUser() {
    this.http
      .get<ApiUserList>('/api/listUser')
      .subscribe((resp: ApiUserList) => {
        this.userListFromAPI = resp.data;
      });
  }

  user: ApiUser = {
    id_user: 0,
    user_name: '',
    user_email: '',
    user_password: '',
    user_role: '',
    created_at: new Date(),
    updated_at: new Date(),
  };

  userFromApi: ApiUserShow = {
    status: 0,
    error: false,
    messages: '',
    data: this.user,
  };

  showUser(id: number) {
    this.http
      .get<ApiUserShow>('/api/showUser/' + id)
      .subscribe((resp: ApiUserShow) => {
        this.userFromApi = resp;
        this.user = resp.data;
      });
  }

  getProfile():Observable<ApiProfile>{
    const headers = {
        Authorization: 'Bearer ' + localStorage.getItem('token'),
    };
    
    return this.http.get<ApiProfile>('api/profile', { headers })
      
        
  }
}
