import {Component, OnInit} from '@angular/core';
import {Customer} from '../model/customer';
import {CustomerType} from '../model/customer-type';
import {CustomerService} from '../service/customer.service';
import {CustomerTypeService} from '../service/customer-type.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
