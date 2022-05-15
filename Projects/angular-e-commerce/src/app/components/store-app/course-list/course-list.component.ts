import { Component, OnInit } from '@angular/core';
import { CourseService } from './course-list.component.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses: any;
  courseService: CourseService

  constructor( courseService: CourseService ) {

    this.courseService = courseService;

   }

  ngOnInit(): void {

    this.courses = this.courseService.getCourse().subscribe((data => {

      this.courses = data;
      console.log(this.courses);
    }))

  }

}
