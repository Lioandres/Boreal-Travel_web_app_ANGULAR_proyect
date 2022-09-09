import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuxService } from '../services/general.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class EditGuard implements CanActivate {
  constructor(private auxServ: AuxService,
              private route:Router,
              private cookieService:CookieService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const cookie=this.cookieService.check('token')

      if(!cookie){
        alert('NOT AUTHORIZED')
        this.route.navigate(['signIn'])
        return false } 
      else return true;
  }
  
}
