import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Category} from "../../model/category";
import {Student} from "../../model/student";
import {ActivatedRoute, Router} from "@angular/router";
import {StudentService} from "../../service/student.service";
import {CategoryService} from "../../service/category.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  studentGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    dateOfBirth: new FormControl(),
    gender: new FormControl(),
    category: new FormControl(),
  });
  student: Student;
  category: Category[];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private  studentService: StudentService,
              private  categoryService: CategoryService
  ) {
    this.categoryService.getAllCategory().subscribe(next => {
      this.category = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');

      studentService.findById(parseInt(id)).subscribe(next => {
        this.student = next;
        this.studentGroup.patchValue(next);
      });
    });

  }

  ngOnInit(): void {
  }
  submit(){
    if(this.studentGroup.valid){
      this.studentService.edit(this.studentGroup.value).subscribe(next=>{
        alert("cap nhap thanh cong");
        this.router.navigateByUrl('/list');
        });
    }
  }
  compareFn(item1: any, item2: any) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }

}
