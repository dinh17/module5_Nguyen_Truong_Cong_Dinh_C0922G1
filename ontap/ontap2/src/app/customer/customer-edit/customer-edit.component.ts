import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerType} from "../../model/customer-type";
import {Customer} from "../../model/customer";
import {ActivatedRoute, Router} from "@angular/router";
import {CustomerService} from "../../service/customer.service";
import {CustomerTypeService} from "../../service/customer-type.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  customer: Customer;
  customerType: CustomerType[];

  customerGroup: FormGroup = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    customerType: new FormControl(),
  });


  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerService,
              private customerTypeService: CustomerTypeService,
              private router: Router) {
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      this.customerType = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      customerService.findById(parseInt(id)).subscribe(next => {
        this.customer = next;
        this.customerGroup.patchValue(next);
      });
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.customerGroup.valid) {
      this.customerService.edit(this.customerGroup.value).subscribe(next => {
        Swal.fire(
          'EDIT!',
          'Your file has been edited.',
          'success'
        )
        this.router.navigateByUrl('/customer-list');
      })
    }
  }

  compare(s1: any, s2: any) {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }
}
