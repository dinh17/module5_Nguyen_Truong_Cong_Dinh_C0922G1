import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name?: string;
  gender?: boolean;
  dateOfBirth?: string;
  customerType?: CustomerType;
}
