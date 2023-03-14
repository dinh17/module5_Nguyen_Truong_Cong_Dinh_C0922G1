import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-facility',
  templateUrl: './add-facility.component.html',
  styleUrls: ['./add-facility.component.css']
})
export class AddFacilityComponent implements OnInit {

  rentType: RentType[] = [];
  facilityType: FacilityType[] = [];
  idCheck: number = 0;
  mess:String


  reactiveForm:FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required,Validators.min(0),Validators.max(1)]),
    descriptionOfOtherConvenience: new FormControl(),
    poolArea: new FormControl(""),
    numberOfFloors: new FormControl(),
    attachFacility: new FormControl(),
    rentType: new FormControl(null, [Validators.required]),
    facilityType: new FormControl(null, [Validators.required]),
  });


  constructor(private router: Router, private rentTypeService: RentTypeService, private facilityTypeService: FacilityTypeService
    , private  facilityService:FacilityService) {
  }

  ngOnInit(): void {

    this.facilityTypeService.getAll().subscribe(data => {
      this.facilityType = data
    })
    this.rentTypeService.getAll().subscribe(data => {
      this.rentType = data
    })
  }

  create() {
    let facility:Facility
    facility = this.reactiveForm.value
    if (this.reactiveForm.valid) {
      let temp = this.facilityService.create(facility).subscribe(ok => {
        if (ok && temp != null) {
          alert('thêm mới thành công');
        }
        this.router.navigateByUrl('/facility');
      });
    } else {
      alert('Vui lòng kiểm tra lại thông tin');
    }

  }

  checkFacilityType() {
    this.idCheck = this.reactiveForm.controls.facilityType.value
  }


  checkPool(poolArea: string) {
    if (this.idCheck == 1 ){
      this.mess = 'Dành cho Villa'
    }
    if (poolArea == '' || poolArea == null) {
      if (this.idCheck == 1) {
        this.reactiveForm.controls.poolArea.setErrors({'nullPoolArea': true});
      }
    }

  }

  checkFloor(floor: string) {
    if (this.idCheck == 1 || this.idCheck == 2 ){
      this.mess = 'Dành cho Villa và House '
    }
    if (floor == '' || floor == null) {
      if (this.idCheck == 1 || this.idCheck == 2) {
        this.reactiveForm.controls.numberOfFloors.setErrors({'nullFloor': true});
      }
    }

  }

}
