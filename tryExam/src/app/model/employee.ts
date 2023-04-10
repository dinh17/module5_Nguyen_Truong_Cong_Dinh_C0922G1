import {Department} from './department';
import {Iposition} from './iposition';

export interface Employee {
  id: number;
  name: string;
  position: Iposition;
  department: Department;
}
