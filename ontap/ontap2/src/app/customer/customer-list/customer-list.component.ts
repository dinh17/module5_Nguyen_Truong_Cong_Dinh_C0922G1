import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import {Router} from "@angular/router";
import {Customer} from "../../model/customer";
import {CustomerType} from "../../model/customer-type";
import Swal from 'sweetalert2'
@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerType: CustomerType[];
  customer: Customer[] = [];
  temp: Customer = {};
  nameSearch = '';
  customerTypeId = 0;
  page=1;


  constructor(private router: Router, private customerService: CustomerService,private customerTypeService:CustomerTypeService) {
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      this.customerType = next;
    });
  }



  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(next => {
      this.customer = next;
    });
  }

  delete(id: number) {
    if (id != null) {
      return this.customerService.delete(this.temp.id).subscribe(next => {

          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )

        this.getAll();
      });
    }
  }

  search() {
    if (this.customerTypeId>0) {
      this.customerService.searchAll(this.nameSearch,this.customerTypeId).subscribe(next => {
        this.customer = next;
      });
    } else {
      this.customerService.searchByName(this.nameSearch).subscribe(next => {
        this.customer = next;
      });
    }
  }
}
