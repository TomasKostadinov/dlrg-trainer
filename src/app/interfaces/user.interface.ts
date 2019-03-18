import {Person} from './person.interface';

export interface User extends Person {
  // for future: accessKey: string;
  licenseNumber: string; // Lehrschein number
}
