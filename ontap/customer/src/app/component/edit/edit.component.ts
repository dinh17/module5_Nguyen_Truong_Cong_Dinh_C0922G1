import {Component, OnInit} from '@angular/core';
import {CustomerTypeService} from '../../service/customer-type.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../model/customer';
import {CustomerType} from '../../model/customer-type';
import {FormControl, FormGroup} from '@angular/forms';
import {CustomerService} from '../../service/customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customerGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    gender: new FormControl(),
    dateOfBirth: new FormControl(),
    customerType: new FormControl(),
  });
  customers: Customer;
  customerType: CustomerType[];

  constructor(private customerTypeService: CustomerTypeService,
              private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.customerTypeService.getAllCustomerType().subscribe(next => {
      this.customerType = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      // tslint:disable-next-line:no-shadowed-variable radix
      customerService.findById(parseInt(id)).subscribe(next => {
        this.customers = next;
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
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.router.navigateByUrl('/list');
      });
    }
  }
  compare(s1: any, s2: any) {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }
}
