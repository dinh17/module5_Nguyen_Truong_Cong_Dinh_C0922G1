import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProductService} from '../service/product.service';
import {Category} from '../model/category';
import {Router} from '@angular/router';
import {CategoryService} from '../service/category.service';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {


  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });
  category: Category[] = [];

  constructor(private productService: ProductService,
              private router: Router,
              private categoryService: CategoryService
  ) {
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(next => {
      this.category = next;
    });
  }

  saveProduct() {
    if (this.productForm.valid) {
      // tslint:disable-next-line:radix
      this.productForm.value.id = parseInt(this.productForm.value.id);
      const temp = this.productService.saveProduct(this.productForm.value).subscribe(next => {
        alert('Thêm mới sản phẩm thành công !');
        this.router.navigateByUrl('product/list');
      });
    }
  }
}
