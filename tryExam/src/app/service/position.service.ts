import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from '../model/department';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  constructor(private http: HttpClient) {
  }

  getAllPosition(): Observable<Position[]> {
    return this.http.get<Position[]>('http://localhost:8080/employees/list-position');
  }

}
