import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {CustomerService} from '../../server/customer.service';
import {Router} from '@angular/router';
import {CustomerTypeService} from '../../server/customer-type.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {


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

  customerTypeList: CustomerType[];
  // select = true;


  constructor(private customerService: CustomerService,
              private router: Router,
              private customerTypeService: CustomerTypeService) {
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      this.customerTypeList = next;
    });
  }
  ngOnInit(): void {}


  submit() {
    console.log(this.customerGroup.value);
    if (this.customerGroup.valid) {
      console.log('a');
      this.customerService.add(this.customerGroup.value).subscribe(next => {
        alert('Thêm mới thành công');
        this.router.navigateByUrl('/customer-list');
      });
    }
  }

}
