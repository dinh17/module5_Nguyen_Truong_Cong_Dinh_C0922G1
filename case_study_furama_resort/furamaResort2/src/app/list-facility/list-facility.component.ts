import {Component, Input, OnInit} from '@angular/core';
import {Facility} from '../model/facility';


@Component({
  selector: 'app-list-facility',
  templateUrl: './list-facility.component.html',
  styleUrls: ['./list-facility.component.css']
})
export class ListFacilityComponent implements OnInit {

  facilities: Facility[];

  constructor() {
  }

  ngOnInit(): void {
  }


}
