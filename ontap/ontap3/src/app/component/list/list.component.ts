import {Component, OnInit} from '@angular/core';
import {Bus} from '../../model/bus';
import {Category} from '../../model/category';
import {BusService} from '../../server/bus.service';
import {CategoryService} from '../../server/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  bus: Bus[] = [];
  p = 1;
  temp: Bus = {};
  page: number;

  number: number;
  totalNumber: number;
  firstPage: boolean;
  lastPage: boolean;

  constructor(private busService: BusService) {
  }

  ngOnInit(): void {
    this.getAll(this.number);
  }

  // tslint:disable-next-line:variable-name
  getAll(number: number) {
    this.busService.getAll(number).subscribe(next => {
      console.log(next);
      this.number = next.number;
      this.totalNumber = next.totalPages;
      console.log(this.totalNumber);
      this.firstPage = next.first;
      this.lastPage = next.last;
      this.bus = next.content;
    });
  }

  delete(id: number) {
    if (id != null) {
      this.busService.delete(this.temp.id).subscribe(next => {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
        this.getAll(this.number);
      });
    }
  }
}
