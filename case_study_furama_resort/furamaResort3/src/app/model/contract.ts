import {Customer} from './customer';
import {Facility} from './facility';

export interface Contract {
  id: number;
  customer: Customer;
  facility: Facility;
  startDay: string;
  endDay: string;
  cost: number;
}
