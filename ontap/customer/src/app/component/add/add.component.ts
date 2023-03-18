import {Component, OnInit} from '@angular/core';
import {CustomerType} from '../../model/customer-type';
import {Customer} from '../../model/customer';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import {CustomerTypeService} from '../../service/customer-type.service';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  // customer: Customer;
  // customerType: CustomerType[];
  // customerGroup: FormGroup = new FormGroup({
  //   id: new FormControl(),
  //   name: new FormControl('', [Validators.required, Validators.minLength(6)]),
  //   gender: new FormControl('', [Validators.required]),
  //   dateOfBirth: new FormControl('', [Validators.required]),
  //   customerType: new FormControl('', [Validators.required]),
  // });
  //
  // constructor(private customerService: CustomerService,
  //             private customerTypeService: CustomerTypeService,
  //             private router: Router) {
  //   this.customerTypeService.getAllCustomerType().subscribe(next => {
  //     this.customerType = next;
  //   });
  // }
  //
  // ngOnInit(): void {
  // }
  //
  // submit() {
  //   console.log('a');
  //   if (this.customerGroup.valid) {
  //     console.log('b');
  //     this.customerService.add(this.customerGroup.value).subscribe(next => {
  //       console.log('c');
  //       Swal.fire(
  //         'Added!',
  //         'Your file has been Added.',
  //         'success'
  //       );
  //       this.router.navigateByUrl('/list');
  //     });
  //   }
  // }

  customerGroup: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    customerType: new FormControl('', [Validators.required]),
  });
  customer: Customer;
  customerType: CustomerType[];

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
    console.log(this.customerGroup.value);
    if (this.customerGroup.valid) {
      this.customerService.add(this.customerGroup.value).subscribe(next => {
        Swal.fire(
          'ADD!',
          'Your file has been added.',
          'success'
        );
        this.router.navigateByUrl('/list');
      });
    }
  }

}
