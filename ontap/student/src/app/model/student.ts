import {Category} from "./category";

export interface Student {
  id?:number;
  name?:string;
  dateOfBirth?:Date;
  gender?:boolean;
  category?:Category;
}
