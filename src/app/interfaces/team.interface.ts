import {Attendee} from './attendee.interface';
import {Badge} from './badge.interface';
import {AttendanceEvent} from './attendance-event.interface';

export interface Team {
  id: string;
  name: string;
  location: string;
  attendees: Attendee[];
  attendance?: AttendanceEvent[];
  goal: string | Badge;
}
