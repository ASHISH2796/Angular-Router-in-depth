import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import { CourseComponent } from 'app/courses/course/course.component';
import { Observable } from 'rxjs';

@Injectable()
export class ConfirmExitguard implements CanDeactivate<CourseComponent> {
    
    constructor(){}

    canDeactivate(component: CourseComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean{
       return component.confirmExit() ;
    }
}