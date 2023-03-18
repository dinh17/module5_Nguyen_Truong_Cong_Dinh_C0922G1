import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Category} from '../../model/category';
import {EmployeeService} from '../../service/employee.service';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  employee: Employee[] = [];
  category: Category[] = [];
  p = 0;

  constructor(private employeeService: EmployeeService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  private getAll() {
    this.employeeService.getAll().subscribe(next => {
      this.employee = next;
    });
  }
}
