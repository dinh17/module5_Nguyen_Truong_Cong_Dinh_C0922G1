import {Component, OnInit} from '@angular/core';
import {Student} from "../../model/student";
import {Category} from "../../model/category";
import {Router} from "@angular/router";
import {CategoryService} from "../../service/category.service";
import {StudentService} from "../../service/student.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  students: Student[] = [];
  categories: Category[] = [];
  temp: Student = {};


  constructor(private router: Router, private categoryService: CategoryService, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.getAll();
    this.getAllCategory();
  }

  getAll() {

    this.studentService.getAll().subscribe(next => {
      console.log(next);
      this.students = next;
    });
  }

  getAllCategory() {
    this.categoryService.getAllCategory().subscribe(next => {
      console.log(next);
      this.categories = next;
    });
  }

  delete(idDelete: number) {
    if (idDelete != null) {
      return this.studentService.deleteStudent(this.temp.id).subscribe(data => {
        console.log(data);
        alert("xoá thành công");
        this.getAll();
      });
    }
  }
}
