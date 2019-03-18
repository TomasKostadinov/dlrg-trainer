import {Component, OnInit} from '@angular/core';
import {Team} from '../../interfaces/team.interface';
import {Storage} from '@ionic/storage';
import {Attendee} from '../../interfaces/attendee.interface';

@Component({
  selector: 'app-attendance-tracking',
  templateUrl: './attendance-overview.page.html',
  styleUrls: ['./attendance-overview.page.scss'],
})
export class AttendanceOverviewPage implements OnInit {

  public savedTeams: Team[] = [];
  private attendees: Attendee[] = [];
  public searchAttendees: Attendee[] = [];
  public attending: Attendee[] = [];

  constructor(private storage: Storage) {
  }

  initializeItems() {
    this.storage.get('teams').then((teams: []) => {
      this.savedTeams = teams;
    });
  }

  public findAttendee(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.searchAttendees = this.searchAttendees.filter((item) => {
        return (item.firstName.toLowerCase().indexOf(val.toLowerCase()) > -1
          || item.lastName.toLowerCase().indexOf(val.toLowerCase()) > -1
          || item.team.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    } else {
      this.resetAttendees();
    }
  }

  private resetAttendees() {
    this.searchAttendees = this.attendees;
  }

  private saveAttendees(team) {
    team.attendees.forEach(function (element, index) {
      element.team = team.name;
      this[index] = element;
    }, team.attendees);

    this.attendees = this.attendees.concat(team.attendees);
    this.resetAttendees();
  }

  public trackAttendance(attendee: Attendee) {
    this.attending.push(attendee);
    this.attendees = this.attendees.filter(obj => obj.id !== attendee.id);
    this.resetAttendees();
  }

  ngOnInit() {
    this.storage.get('teams').then((saved: Team[]) => {
      saved.forEach((team: Team) => {
        this.saveAttendees(team);
      });
    });
  }

}
