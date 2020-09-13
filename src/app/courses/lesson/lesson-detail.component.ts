import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LessonDetail} from "../model/lesson-detail";
import {Observable} from "rxjs";

@Component({
  selector: 'lesson',
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.css']
})
export class LessonDetailComponent implements OnInit {

  // lesson$: Observable<LessonDetail>;
  lesson: LessonDetail; 
  constructor(private route : ActivatedRoute) {

    console.log("Created LessonDetailComponent...");

  }

  ngOnInit() {
    this.lesson=this.route.snapshot.data["lesson"];
  }



}
