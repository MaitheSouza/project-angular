import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  myCourses: any;

  courses: string[];

  constructor(private CoursesService: CoursesService) {
    this.myCourses = "https://linkedin.com/maithe-de-souza";

    this.courses = this.CoursesService.getCourses();

  }

  ngOnInit(): void {
  }

}
