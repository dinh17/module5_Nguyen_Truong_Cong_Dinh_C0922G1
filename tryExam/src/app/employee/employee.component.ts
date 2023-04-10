import {Component, OnInit} from '@angular/core';
import {Employee} from '../model/employee';
import {EmployeeService} from '../service/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee: Employee[] = [];
  number: number;
  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.getAllEmployee(this.number);
  }


  // tslint:disable-next-line:variable-name
  getAllEmployee(num: number) {
    this.employeeService.getAllEmployees(num).subscribe(next => {
      this.number = next.number;
      this.employee = next.content;
    });
  }
}
