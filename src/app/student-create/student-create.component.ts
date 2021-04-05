import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { Message } from '../message';
import { StudentService } from '../student.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  student: Student = new Student();
  message: Message = new Message();

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  createStudent() {
    console.warn(this.student)
    this.studentService.createStudent(this.student).subscribe(data => {
      this.message = data;
    });
    this.student = new Student();
  }

}
