import {Person} from './person.interface';

export interface User extends Person {
  accessKey?: string;
  licenseNumber: string; // Lehrschein number
}
