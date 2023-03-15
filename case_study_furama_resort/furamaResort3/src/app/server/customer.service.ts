import { Injectable } from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient:HttpClient) { }

  getAll():Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers');
  }

  deteleCustomer(id: number) {
    return this.httpClient.delete('http://localhost:3000/customers/'+id);
  }

  findById(id:number):Observable<Customer> {
    return this.httpClient.get<Customer>('http://localhost:3000/customers/'+id);
  }


  edit(value: any) {
    return this.httpClient.put('http://localhost:3000/customers/'+value.id,value);
  }

  add(customer: Customer) {
    return this.httpClient.post('http://localhost:3000/customers', customer);
  }
}
