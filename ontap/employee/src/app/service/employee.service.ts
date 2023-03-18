import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient: HttpClient) {
  }

  // @ts-ignore
  getAll(): Observable <Employee[]> {
    this.httpClient.get<Employee[]>('http://localhost:3000/employee');
  }
}
