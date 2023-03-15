import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerTypeService} from '../../server/customer-type.service';
import {CustomerService} from '../../server/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {


  customerGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    iDCard: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    customerType: new FormControl('')
  });
  customer: Customer;
  customerType: CustomerType[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private customerTypeService: CustomerTypeService,
              private customerService: CustomerService
  ) {
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

  submitEdit() {
    if (this.customerGroup.valid) {
      this.customerService.edit(this.customerGroup.value).subscribe(next => {
        alert('cap nhap thanh cong');
        this.router.navigateByUrl('/customer-list');
      });
    }
  }

  compareFn(item1: any, item2: any) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}
