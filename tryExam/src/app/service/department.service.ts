import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) {
  }

  getAllDepartment(): Observable<Department[]> {
    return this.http.get<Department[]>('http://localhost:8080/employees/list-department');
  }
}
