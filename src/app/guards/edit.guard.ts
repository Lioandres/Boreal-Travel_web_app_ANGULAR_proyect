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
              private route:Router
              ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.auxServ.loggedIn!=true){
        alert('NOT AUTHORIZED')
        this.route.navigate(['signIn'])
        return false } 
      else return true;
  }
  
}
