import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customerType: CustomerType[] = [];
  reactiveForm: FormGroup;
  customer: Customer={};
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private customerService: CustomerService, private customerTypeService: CustomerTypeService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getCustomer(+id)
      }
    })
    this.reactiveForm = new FormGroup({
      id: new FormControl(this.customer?.id),
      name: new FormControl(this.customer?.name, [Validators.required]),
      dateOfBirth: new FormControl(this.customer?.dateOfBirth, [Validators.required]),
      gender: new FormControl(this.customer?.gender, [Validators.required]),
      idCard: new FormControl(this.customer?.idCard, [Validators.required]),
      phoneNumber: new FormControl(this.customer?.phoneNumber, [Validators.required]),
      address: new FormControl(this.customer?.address, [Validators.required,Validators.email]),
      email: new FormControl(this.customer?.email, [Validators.required]),
      customerType: new FormControl(null,[Validators.required])
    })
    this.customerTypeService.getAll().subscribe(next => {
      this.customerType = next;
    });
  }
  private getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(data => {
      this.reactiveForm.patchValue(data)
    })
  }

  edit() {
    this.customer = this.reactiveForm.value;
    console.log(this.customer)
    if (this.reactiveForm) {
      let temp = this.customerService.edit(this.customer.id, this.customer).subscribe(ok => {
        if (temp != null && ok) {
          alert('Chỉnh sửa thành công');
        }
        this.router.navigateByUrl('/customer');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }
  }
}
