import {Attendee} from './attendee.interface';
import {Badge} from './badge.interface';

export interface Team {
  id: string;
  name: string;
  location: string;
  attendees: Attendee[];
  goal?: Badge;
}
