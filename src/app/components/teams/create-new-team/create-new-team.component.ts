import {Component, OnInit} from '@angular/core';
import {Team} from '../../../interfaces/team.interface';
import {Attendee} from '../../../interfaces/attendee.interface';
import {Storage} from '@ionic/storage';
import * as uuid from 'uuid';
import {Router} from '@angular/router';


@Component({
  templateUrl: './create-new-team.component.html',
  styleUrls: ['./create-new-team.component.scss'],
})
export class CreateNewTeamComponent implements OnInit {

  public selectGoalActionSheetOptions: any = {
    header: 'Abzeichen wählen',
    subHeader: 'Zielabzeichen der Gruppe wählen',
  };
  public selectBadgeActionSheetOptions: any = {
    header: 'Abzeichen wählen',
    subHeader: 'Aktuelles Abzeichen des Teilnehmers',
  };

  public newAttendee: Attendee = {
    id: uuid.v4(),
    lastName: '',
    firstName: '',
    birthDay: '',
    badge: '',
    lastRefresh: Date.now(),
  };

  public team: Team = {
    id: '',
    attendees: [],
    location: '',
    name: '',
    goal: '',
  };

  private savedTeams: Team[] = [];

  constructor(private storage: Storage, private router: Router) {
  }

  ngOnInit() {
    this.storage.get('teams').then((teams: Team[]) => {
      if (teams != null) {
        this.savedTeams = teams;
      }
    });
  }

  public saveTeam() {
    this.team.id = uuid.v4();
    this.savedTeams.push(this.team);
    this.storage.set('teams', this.savedTeams);
    this.router.navigate(['/teams/' + this.team.id], { replaceUrl: true });
  }

  public createAttendee() {
    this.team.attendees.push(this.newAttendee);
    this.newAttendee = {
      id: uuid.v4(),
      lastName: '',
      firstName: '',
      birthDay: '',
      badge: '',
      lastRefresh: Date.now(),
    };
  }


}
