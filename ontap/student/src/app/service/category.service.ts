import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Category} from "../model/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  getAllCategory(): Observable<Category[]>{
    return this.httpClient.get<Category[]>('http://localhost:3000/category');
  }
}
