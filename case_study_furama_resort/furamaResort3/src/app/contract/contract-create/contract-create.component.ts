import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../../model/customer';
import {Facility} from '../../model/facility';
import {ContractService} from '../../server/contract.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  customers: Customer[] = [];
  facilities: Facility[] = [];
  contracts: FormGroup = new FormGroup({
    id: new FormControl(),
    startDay: new FormControl('', [Validators.required, this.todayValid]),
    endDay: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    customer: new FormControl(null, [Validators.required]),
    facility: new FormControl(null, [Validators.required]),
  });

  constructor(private contractService: ContractService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllCustomer();
    this.getAllFacility();
  }

  getAllCustomer() {
    this.contractService.getAllCustomer().subscribe(customers => {
      this.customers = customers;
    });
  }

  getAllFacility() {
    this.contractService.getAllFacility().subscribe(facilities => {
      this.facilities = facilities;
    });
  }

  todayValid(today: AbstractControl) {
    return (new Date(today.value) <= new Date(Date.now())) ? {todayValid: true} : null;
  }

  createContract() {
    const contract = this.contracts.value;
    this.contractService.createContract(contract).subscribe(
      () => {
        this.contracts.reset();
        this.router.navigate(['/contract']);
        alert('Thêm thành công');
      }
    );
  }

}
