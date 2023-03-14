import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {ProductService} from '../service/product.service';
import {CategoryService} from '../service/category.service';
import {Category} from '../model/category';
import {Product} from '../model/product';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl(),
  });

  id: number;
  product: Product;
  category: Category[] = [];



  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        // tslint:disable-next-line:radix
        productService.findById(parseInt(id)).subscribe(next => {
          this.productForm.patchValue(next);
        });
      }
    });
    categoryService.getAll().subscribe(data => {
      this.category = data;
    });
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.editProduct(product).subscribe(next => {
        alert('Chỉnh sủa thành công !');
        this.router.navigate(['/product/list']);
      },
      error => {
        alert('Chỉnh sửa không thành công !');
      });
  }
  compareFn(item1, item2) {
    return item1 && item2 ? item1.id === item2.id : item1 === item2;
  }
}


