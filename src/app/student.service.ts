import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from './message';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseUrl: string = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  createStudent(student: Student): Observable<Message> {
    console.log("id ", "Service", student.stdId);
    return this.http.post<Message>(`${this.baseUrl}/student`, student);
  }

  getAllStudents(): Observable<Student[]> {
    console.log("id ", "Service");
    return this.http.get<Student[]>(`${this.baseUrl}/students`);
  }

  deleteStudentById(id: number): Observable<Message> {
    return this.http.delete<Message>(`${this.baseUrl}/student/${id}`);
  }

  getOneStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${this.baseUrl}/student/${id}`);
  }

  updateStudent(student: Student): Observable<Message> {
    return this.http.put<Message>(`${this.baseUrl}/student`, student);
  }
}
