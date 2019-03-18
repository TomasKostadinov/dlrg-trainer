import {Person} from './person.interface';

export interface Attendee extends Person {
  id: string;
  badge: string;
  team?: string;
  lastRefresh: number;
}
