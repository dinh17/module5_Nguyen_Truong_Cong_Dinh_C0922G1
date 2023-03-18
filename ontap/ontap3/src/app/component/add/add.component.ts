import {Component, OnInit} from '@angular/core';
import {Category} from '../../model/category';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CategoryService} from '../../server/category.service';
import {BusService} from '../../server/bus.service';
import {ActivatedRoute, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  category: Category[] = [];
  busGroup: FormGroup = new FormGroup({
    id: new FormControl(),
    numberCard: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
    localForm: new FormControl('', [Validators.required]),
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
  }

  ngOnInit(): void {
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
