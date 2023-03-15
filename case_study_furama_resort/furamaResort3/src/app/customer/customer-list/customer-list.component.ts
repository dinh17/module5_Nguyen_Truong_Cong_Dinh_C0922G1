import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../server/customer.service';
import {Customer} from '../../model/customer';
import {CustomerTypeService} from '../../server/customer-type.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];
  customerType: Customer[];
  temp: Customer = {};

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCustomerType();
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      this.customers = next;
    });
  }

  getAllCustomerType() {
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      this.customerType = next;
    });
  }


  delete(id: number) {
    if (id != null) {
      return this.customerService.deteleCustomer(this.temp.id).subscribe(next => {
        alert('Xoa Thanh Cong');
        this.getAll();
      });
    }
  }
}
