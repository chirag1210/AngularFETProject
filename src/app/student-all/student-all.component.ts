import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

import { StudentService } from '../student.service'
import { Message } from '../message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {

  public students: Student[] = [
  ];
  message: Message = new Message();

  constructor(private studentService: StudentService, private router:Router) { }

  ngOnInit(): void {
    this.getAllStudents()
  }

  getAllStudents() {
    console.log("id ", "Component");
    this.studentService.getAllStudents().subscribe(data => {
      this.students = data;
      console.log("peint ", this.students);
    },
    error=>{
      this.students=[]
      });
  }

  deleteStudent(id:number){
    this.studentService.deleteStudentById(id).subscribe(data => {
      this.message = data;
      this.getAllStudents();
    },
    error=>{
      this.message = error;
      });
  }

  editStudent(id:number){
    //pass data to edit page
    this.router.navigate(['edit',id]);
    }
}
