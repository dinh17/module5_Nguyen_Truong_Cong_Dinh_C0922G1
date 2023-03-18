import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {CategoryService} from '../../server/category.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Bus} from '../../model/bus';
import {BusService} from '../../server/bus.service';
import Swal from 'sweetalert2';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  category: Category[] = [];
  busGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    numberCar: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    localFrom: new FormControl('', [Validators.required]),
    localEnd: new FormControl('', [Validators.required]),
    nameBus: new FormControl('', [Validators.required]),
    numberPhone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    timeOut: new FormControl('', [Validators.required]),
    timeIn: new FormControl('', [Validators.required]),
  });


  constructor(private categoryService: CategoryService,
              private busService: BusService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.categoryService.getAllCategory().subscribe(next => {
      this.category = next;
    });
    this.activatedRoute.paramMap.subscribe(next => {
      const id = next.get('id');
      // tslint:disable-next-line:radix no-shadowed-variable
      this.busService.findById(parseInt(id)).subscribe(next => {
        this.busGroup.patchValue(next);
      });
    });
  }

  ngOnInit(): void {
  }

  compare(s1: any, s2: any) {
    return s1 && s2 ? s1.id === s2.id : s1 === s2;
  }

  submit() {
    if (this.busGroup.valid) {
      this.busService.editBus(this.busGroup.value).subscribe(next => {
        Swal.fire(
          'Edit!',
          'Your file has been edited.',
          'success'
        );
        this.router.navigateByUrl('/list');
      });
    }
  }
}
