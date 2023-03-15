import { Component, OnInit } from '@angular/core';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FacilityService} from '../../server/facility.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {

  facilityTypeList: FacilityType[] = [];
  rentTypeList: RentType[] = [];
  facilityList: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    standard: new FormControl(),
    description: new FormControl(),
    poolArea: new FormControl(),
    floor: new FormControl(),
    facilityFree: new FormControl(),
    rentType: new FormControl(null, [Validators.required]),
    facilityType: new FormControl(null, [Validators.required])
  });
  public idAdd: 1|2|3;
  public standardError: string;
  public descriptionError: string;
  public floorError: string;
  public messagePoolError: string;

  // @ts-ignore
  constructor(private facilityService: FacilityService,
              private route: Router) {
  }

  ngOnInit(): void {
    this.getAllFacilityType();
    this.getAllRentType();
  }

  getAllRentType() {
    this.facilityService.getAllRentType().subscribe(items => {
      this.rentTypeList = items;
    });
  }

  getAllFacilityType() {
    this.facilityService.getAllFacilityType().subscribe(items => {
      this.facilityTypeList = items;
    });
  }

  createFacility() {
    const facility = this.facilityList.value;
    this.facilityService.createFacility(facility).subscribe(() => {
      this.facilityList.reset();
      this.route.navigate(['/facility']);
      alert('Thêm mới khách hàng thành công');
    });
  }
  checkValue() {
    const facilityTypez = this.facilityList.controls.facilityType.value;
    this.idAdd = facilityTypez.id;
  }

  checkStandard(standard: string) {
    if (standard === '' || standard == null) {
      if (this.idAdd === 1) {
        this.facilityList.controls.standard.setErrors({nullStandard: true});
        this.standardError = 'Vui lòng nhập tiêu chuẩn phòng cho Villa';
      } else if (this.idAdd === 2) {
        this.facilityList.controls.standard.setErrors({nullStandard: true});
        this.standardError = 'Vui lòng nhập tiêu chuẩn phòng cho House';
      }
    }
  }

  checkDescription(description: string) {
    if (description === '' || description == null) {
      if (this.idAdd === 1) {
        this.facilityList.controls.description.setErrors({nullDescription: true});
        this.descriptionError = 'Vui lòng nhập mô tả cho Villa';
      } else if (this.idAdd === 2) {
        this.facilityList.controls.description.setErrors({nullDescription: true});
        this.descriptionError = 'Vui lòng nhập mô tả cho House';
      }
    }
  }

  checkPool(pool: string) {
    if (pool === '' || pool == null) {
      if (this.idAdd === 1) {
        this.facilityList.controls.poolArea.setErrors({nullPoolArea: true});
        this.messagePoolError = 'Vui lòng nhập diện tích hồ bơi cho Villa';
      }
    }
  }

  checkFloor(floor: string) {
    if (floor === '' || floor === null) {
      if (this.idAdd === 1 ) {
        this.facilityList.controls.poolArea.setErrors({nullFloor: true});
        this.floorError = 'Vui lòng nhập số tầng cho Villa';
      } else if (this.idAdd === 2) {
        this.facilityList.controls.description.setErrors({nullFloor: true});
        this.floorError = 'Vui lòng nhập số tầng cho House';
      }
    }
  }

  checkFreeFacility(free: string) {
    if (free === '' || free === null) {
      // @ts-ignore
      if (this.idAdd === 3) {
        this.facilityList.controls.facilityFree.setErrors({nullFreeFacility: true});
      }
    }
  }

}
