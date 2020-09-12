import{Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Course} from '../model/course';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {CoursesService} from './courses.service';

@Injectable()
export class CourseResolver implements Resolve<Course> {
    
    constructor(private course : CoursesService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        const url =route.paramMap.get('courseUrl');
        return this.course.loadCourseByUrl(url);
    }

}