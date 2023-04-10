import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Employee} from '../model/employee';
import {Observable} from 'rxjs';


class Page<T> {
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }
  getAllEmployees(page: number): Observable<any> {
    return this.http.get<any>('http://localhost:8080/employees/page?page=' + page);
  }
}
