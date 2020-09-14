import {NgModule, Component} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules, UrlSerializer} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {CanLoadGuard} from './services/canload.guard';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/courses",
    pathMatch:"full"
  },
  {
    path:"courses",
    loadChildren:()=>import('./courses/courses.module').then(m=>m.CoursesModule) ,
    canLoad:[CanLoadGuard] 
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"about",
    component: AboutComponent
  },
  {
    path:"**",
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    CanLoadGuard
  ]
})
export class AppRoutingModule {


}
