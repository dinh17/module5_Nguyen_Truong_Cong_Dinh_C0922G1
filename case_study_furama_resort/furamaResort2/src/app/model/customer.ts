import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  name?: string;
  gender?: number;
  dayOfBirth?: string;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  customerType?: CustomerType;
}
