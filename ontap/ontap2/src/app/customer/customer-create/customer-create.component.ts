import { Component, OnInit } from '@angular/core';
import {CustomerType} from "../../model/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerType: CustomerType[];

  customerGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.pattern('^[A-Z][a-z]*([ ][A-Z][a-z]*)*$'), Validators.required]),
    gender: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    customerType: new FormControl(),
  });


  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      this.customerType = next;
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.customerGroup.valid) {
      this.customerService.add(this.customerGroup.value).subscribe(next => {
        Swal.fire(
          'ADD!',
          'Your file has been added.',
          'success'
        )
        this.router.navigateByUrl('/customer-list');
      })
    }
  }

}
