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
    return this.httpClient.delete('http://localhost:8080/bus/' + id);
  }


  findById(id: number) {
    return this.httpClient.get<Bus>('http://localhost:8080/bus/' + id);
  }

  editBus(bus: Bus) {
    return this.httpClient.put('http://localhost:8080/bus/update/', bus);
  }

}
