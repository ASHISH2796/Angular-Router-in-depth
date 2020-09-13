import{ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {LessonSummary} from '../model/lesson-summary'
import {CoursesService} from './courses.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LessonResolver  implements Resolve<LessonSummary[]>{

    constructor(private courses: CoursesService ){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<LessonSummary[]>  {
        const url =route.paramMap.get('courseUrl');
        return this.courses.loadAllCourseLessonsSummary(url);
    }
}