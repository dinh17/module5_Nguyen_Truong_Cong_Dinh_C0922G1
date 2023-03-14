import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customerType: CustomerType[] = [];
  reactiveForm: FormGroup;

  constructor(private router:Router , private customerService:CustomerService , private customerTypeService:CustomerTypeService) {
    this.customerTypeService.getAll().subscribe(data => {
      this.customerType =  data
    })
    this.reactiveForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      customerType: new FormControl(null , [Validators.required])
    })
  }


  ngOnInit(): void {
  }

  create() {
    let customer:Customer
    customer = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      let temp = this.customerService.create(customer).subscribe(ok => {
        if (ok && temp != null) {
          alert('thêm mới thành công');
        }
        this.router.navigateByUrl('/customer');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }
  }
}
