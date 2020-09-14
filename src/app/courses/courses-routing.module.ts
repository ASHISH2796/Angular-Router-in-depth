import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseComponent } from './course/course.component';
import {CourseResolver} from  './services/course.resolver';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonDetailComponent } from './lesson/lesson-detail.component';
import {LessonResolver} from  './services/lesson.resolver';
import {LessonDetailResolver} from  './services/lessonDetail.resolver';
import {AuthGuard} from '../services/auth.guard';
import {ConfirmExitguard} from '../services/confirm.guard';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:":courseUrl",
    component:CourseComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    canDeactivate:[ConfirmExitguard],
    children:[
      {
        path:"",
        component: LessonsListComponent,
        resolve: {
          lessons:LessonResolver
        }
      },
     {
       path:"lesson/:lessonSeqNo",
       component: LessonDetailComponent,
       resolve: {
        lesson: LessonDetailResolver
       }
     }
    ],
    resolve: {
      course: CourseResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers: [
    CourseResolver,
    LessonResolver,
    LessonDetailResolver,
    AuthGuard,
    ConfirmExitguard
  ]
})
export class CoursesRoutingModule {



}
