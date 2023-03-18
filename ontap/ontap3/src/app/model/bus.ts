import {Category} from './category';


export interface Bus {
  id?: number;
  numberCard?: number;
  category?: Category;
  nameBus?: string;
  localForm?: string;
  localEnd?: string;
  numberPhone?: number;
  email?: string;
  timeOut?: string;
  timeIn?: string;
}
