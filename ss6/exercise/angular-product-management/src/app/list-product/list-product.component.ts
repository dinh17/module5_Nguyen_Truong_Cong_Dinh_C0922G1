import {Component, OnInit} from '@angular/core';
import {ProductService} from '../service/product.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  temp: Product = {};
  // idRemove : number = 0;
  // nameRemove :string;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    return this.productService.getAll().subscribe(next => {
      this.products = next;
    });
  }

  delete(idDelete: number) {
    if (idDelete != null) {
      return this.productService.deleteProduct(this.temp.id).subscribe(data => {
        console.log(data);
        alert('Xoá thành công !');
        this.getAll();
      });
    }
  }


  // remove(id: number, name: string) {
  //   this.idRemove = id;
  //   this.nameRemove = name;
  // }
  //
  // remove1(id:number){
  //   return this.productService.deleteProduct(id).subscribe(data => {
  //     console.log(data);
  //     alert('Xoá thành công !');
  //     this.getAll();
  //   });
  // }
}
