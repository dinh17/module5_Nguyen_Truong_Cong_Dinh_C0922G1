import {Category} from './category';

export interface Employee {
  id?: number;
  name: string;
  gender: boolean;
  dateOfBirth: string;
  category: Category;
}
