import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuxService } from '../services/general.service';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  constructor(private auxServ: AuxService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.auxServ.loggedIn){
        alert('NOT AUTHORIZED')
        return false } 
      else return true;
  }
  
}
