import {Injectable} from '@angular/core';
import {LessonDetail} from '../model/lesson-detail';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';
import {CoursesService} from '../services/courses.service';

@Injectable()
export class LessonDetailResolver implements Resolve<LessonDetail>{

    constructor(private course :CoursesService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<LessonDetail> {
        const seqNo =route.paramMap.get("lessonSeqNo");
        const url = route.parent.paramMap.get("courseUrl"); //to get path variabe from parent
        return this.course.loadLessonDetail(url,seqNo);    
    }
}