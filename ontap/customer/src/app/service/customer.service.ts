import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customer');
  }

  deleteCustomer(id: number) {
    return this.httpClient.delete('http://localhost:3000/customer/' + id);
  }

  add(value: any) {
    return this.httpClient.post('http://localhost:3000/customer/' + value.id, value);
  }


  findById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customer/' + id);
  }

  edit(value: any): Observable<Customer[]> {
    return this.httpClient.put<Customer[]>('http://localhost:3000/customer/' + value.id, value);
  }

  searchAll(nameSearch: string, customerTypeId: number): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customer?name_like=' + nameSearch + '&customerType.id=' + customerTypeId);
  }


  searchByName(nameSearch: string): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customer?name_like=' + nameSearch);
  }
}
