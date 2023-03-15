import { Injectable } from '@angular/core';
import {Contract} from '../model/contract';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Customer} from '../model/customer';
import {Facility} from '../model/facility';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  constructor(private httpClient: HttpClient) { }

  getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>('http://localhost:3000/contracts');
  }
  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('http://localhost:3000/customers');
  }
  getAllFacility(): Observable<Facility[]> {
    return this.httpClient.get<Facility[]>('http://localhost:3000/facilitys');
  }
  createContract(contract: any): Observable<Contract> {
    return this.httpClient.post<Contract>('http://localhost:3000/contracts', contract);
  }
  updateContract(contract: any): Observable<Contract> {
    return this.httpClient.put<Contract>('http://localhost:3000/contracts/' + contract.id, contract);
  }
}
