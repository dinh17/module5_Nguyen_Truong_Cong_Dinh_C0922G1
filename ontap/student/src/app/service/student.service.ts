import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpClient: HttpClient) { }
  getAll(): Observable<Student[]>{
    return this.httpClient.get<Student[]>('http://localhost:3000/student');
  }

  deleteStudent(id: number) {
    return this.httpClient.delete('http://localhost:3000/student/'+id);
  }
  findById(id: number): Observable<Student> {
    return this.httpClient.get<Student>('http://localhost:3000/student/' + id);
  }


  edit(value: any) {
    return this.httpClient.put('http://localhost:3000/student/'+value.id,value)
  }

}
