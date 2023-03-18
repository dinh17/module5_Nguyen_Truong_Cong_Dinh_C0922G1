import {Category} from './category';


export interface Bus {
  id?: number;
  numberCar?: number;
  category?: Category;
  nameBus?: string;
  localFrom?: string;
  localEnd?: string;
  numberPhone?: number;
  email?: string;
  timeOut?: string;
  timeIn?: string;
}
