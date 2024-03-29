import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-facility',
  templateUrl: './edit-facility.component.html',
  styleUrls: ['./edit-facility.component.css']
})
export class EditFacilityComponent implements OnInit {

  rentType: RentType[] = [];
  facilityType: FacilityType[] = [];
  facility: Facility = {}
  idCheck: number = 0;
  mess: string;


  reactiveForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(this.facility?.name, [Validators.required]),
    area: new FormControl(this.facility?.area, [Validators.required]),
    image: new FormControl(this.facility?.image, [Validators.required]),
    cost: new FormControl(this.facility?.cost, [Validators.required]),
    maxPeople: new FormControl(this.facility?.standardRoom, [Validators.required]),
    standardRoom: new FormControl(this.facility?.standardRoom, [Validators.required, Validators.min(0), Validators.max(1)]),
    descriptionOfOtherConvenience: new FormControl(this.facility?.descriptionOfOtherConvenience),
    poolArea: new FormControl(this.facility?.poolArea),
    numberOfFloors: new FormControl(this.facility?.numberOfFloors),
    attachFacility: new FormControl(this.facility?.attachFacility),
    rentType: new FormControl(this.facility?.rentType, [Validators.required]),
    facilityType: new FormControl(this.facility?.facilityType, [Validators.required]),
  });


  constructor(private activatedRoute: ActivatedRoute, private router: Router, private facilityService: FacilityService
    , private facilityTypeService: FacilityTypeService, private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getFacility(+id)
      }
    })
    this.facilityTypeService.getAll().subscribe(data => {
      this.facilityType = data
    })
    this.rentTypeService.getAll().subscribe(data => {
      this.rentType = data
    })
  }

  edit() {
    this.facility = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      const temp = this.facilityService.edit(this.facility.id, this.facility).subscribe(ok => {
        if (temp != null && ok) {
          alert('Đã chỉnh sửa thành công')
        }
        this.router.navigateByUrl('/facility')
      })
    } else alert('Vui lòng thử lại')
  }

  private getFacility(id: number) {
    this.facilityService.findById(id).subscribe(data => {
      this.reactiveForm.patchValue(data)
    })

  }

  checkFacilityType() {
    this.idCheck = this.reactiveForm.controls.facilityType.value
  }

  checkPool(value: string) {

  }

  checkFloor(value: string) {

  }

}
