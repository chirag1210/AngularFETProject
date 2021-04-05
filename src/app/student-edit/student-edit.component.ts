import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service'
import { Message } from '../message';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  student: Student = new Student();
  id: number;

  //ActivatedRoute to retrive value
  constructor(private service: StudentService,
    private activeRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.id = this.activeRouter.snapshot.params['id'];
    this.service.getOneStudent(this.id).subscribe(
      data => {
        this.student = data;
      }
    );
  }

  updateStudent() {
    this.service.updateStudent(this.student).subscribe(data => {
      console.log(data),
        this.router.navigate(['/all']);
    });

  }

}
