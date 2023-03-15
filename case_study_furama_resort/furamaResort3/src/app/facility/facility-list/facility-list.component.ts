import { Component, OnInit } from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../server/facility.service';

@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {

  facilityList: Facility[] = [];

  constructor(private facilityService: FacilityService) {
    this.getAllFacility();

  }

  ngOnInit(): void {
  }

  getAllFacility() {
    this.facilityService.getAllFacility().subscribe(items => {
      this.facilityList = items;
    });
  }
}
