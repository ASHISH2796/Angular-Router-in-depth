import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate,CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthStore} from '../services/auth.store';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {

    constructor(private auth : AuthStore,private router : Router){}
   
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean | UrlTree> {
        return this.isAuthCheck();
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean | UrlTree> {
        return this.isAuthCheck();
    }

    private isAuthCheck(){
        return this.auth.isLoggedIn$.
        pipe(
            map(
                loggedIn=>loggedIn ? true : this.router.parseUrl('/login') 
            )
            );  
    }
    
}