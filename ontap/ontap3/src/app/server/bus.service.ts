import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Bus} from '../model/bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  constructor(private  httpClient: HttpClient) {
  }

  getAll(page: number): Observable<any> {
    return this.httpClient.get<any>('http://localhost:8080/bus/page?page=' + page);
  }

  delete(id: number) {
    return this.httpClient.delete('http://localhost:3000/bus/' + id);
  }


  findById(id: number) {
    return this.httpClient.get('http://localhost:3000/bus/' + id);
  }

  editBus(value: any): Observable<Bus[]> {
    return this.httpClient.put<Bus[]>('http://localhost:3000/bus/' + value.id, value);
  }
}
