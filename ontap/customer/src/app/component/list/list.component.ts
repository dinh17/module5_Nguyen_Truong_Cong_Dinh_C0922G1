import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  customers: Customer[] = [];
  customerType: CustomerType[] = [];
  p = 1;
  temp: Customer = {};
  customerTypeId = 0;
  nameSearch = '';

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      this.customerType = next;
    });
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    return this.customerService.getAll().subscribe(next => {
      this.customers = next;
    });
  }

  delete(id: number) {
    if (id != null) {
      return this.customerService.deleteCustomer(this.temp.id).subscribe(data => {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.getAll();
      });
    }
  }

  search() {
    if (this.customerTypeId > 0) {
      this.customerService.searchAll(this.nameSearch, this.customerTypeId).subscribe(next => {
        this.customers = next;
      });
    } else {
      this.customerService.searchByName(this.nameSearch).subscribe(next => {
        this.customers = next;
      });
    }
  }
}

