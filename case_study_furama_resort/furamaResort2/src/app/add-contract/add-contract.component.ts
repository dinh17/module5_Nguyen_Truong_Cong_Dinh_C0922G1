import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-contract',
  templateUrl: './add-contract.component.html',
  styleUrls: ['./add-contract.component.css']
})
export class AddContractComponent implements OnInit {

  contractList: Contract[] = [];
  customerList: Customer[] = [];
  facilityList: Facility[] = [];
  reactiveForm: FormGroup;
  contract: Contract;
  formAddContract: FormGroup;


  constructor(private contractService: ContractService, private router: Router,
              private customerService: CustomerService, private facilityService: FacilityService) {
    this.reactiveForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required]),
      customer: new FormControl('', [Validators.required]),
      facility: new FormControl('', [Validators.required])
    });

  }

  ngOnInit(): void {
    this.contractService.getAll().subscribe(data => {
      this.contractList = data;
      console.log(this.contractList);
    });
    this.customerService.getAll().subscribe(data => {
      this.customerList = data;
    });
    this.facilityService.getAll().subscribe(data => {
      this.facilityList = data;
    });
  }

  create() {
    this.contract = this.reactiveForm.value;
    if (this.reactiveForm.valid) {
      const temp = this.contractService.create(this.contract).subscribe(ok => {
        if (temp != null && ok) {
          alert('Đã thêm mới thành công');
        }
        this.ngOnInit();
      });
    } else {
      alert('Thêm mới không thành công ');
    }
  }

}
