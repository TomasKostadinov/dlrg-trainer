import {Component, OnInit} from '@angular/core';
import {Storage} from '@ionic/storage';
import {Team} from '../../../interfaces/team.interface';
import {Attendee} from '../../../interfaces/attendee.interface';
import {ToastController} from '@ionic/angular';

@Component({
  templateUrl: './track.page.html',
  styleUrls: ['./track.page.scss'],
})
export class TrackPage implements OnInit {

  public search: string = '';
  public savedTeams: Team[] = [];
  private attendees: Attendee[] = [];
  public searchAttendees: Attendee[] = [];
  public attending: Attendee[] = [];
  public excused: Attendee[] = [];

  constructor(private storage: Storage, private toastController: ToastController) {
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
      this.resetSearch();
    }
  }

  private resetSearch() {
    this.search = '';
    this.searchAttendees = this.attendees;
  }

  private saveAttendees(team) {
    team.attendees.forEach(function (element, index) {
      element.team = team.name;
      this[index] = element;
    }, team.attendees);

    this.attendees = this.attendees.concat(team.attendees);
    this.resetSearch();
  }

  public trackAttendance(attendee: Attendee) {
    this.attending.push(attendee);
    this.attendees = this.attendees.filter(obj => obj.id !== attendee.id);
    this.resetSearch();
  }

  public trackExcuse(attendee: Attendee) {
    this.excused.push(attendee);
    this.attendees = this.attendees.filter(obj => obj.id !== attendee.id);
    this.attending = this.attending.filter(obj => obj.id !== attendee.id);
    this.resetSearch();
    this.personExcusedToast(attendee);
  }

  public saveAttendance() {

  }

  ngOnInit() {
    this.storage.get('teams').then((saved: Team[]) => {
      saved.forEach((team: Team) => {
        this.saveAttendees(team);
      });
    });
  }

  async personExcusedToast(attendee: Attendee) {
    const toast = await this.toastController.create({
      message: attendee.firstName + ' ' + attendee.lastName + ' ist nun entschuldigt.',
      duration: 2000,
    });
    toast.present();
  }
}
