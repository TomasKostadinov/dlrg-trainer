import {Component, OnInit} from '@angular/core';
import {Team} from '../../../interfaces/team.interface';
import {Attendee} from '../../../interfaces/attendee.interface';
import {Storage} from '@ionic/storage';
import * as uuid from 'uuid';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {Badge} from '../../../interfaces/badge.interface';
import {badges} from '../../../config/badges.config';


@Component({
  templateUrl: './edit-team.component.html',
  styleUrls: ['./edit-team.component.scss'],
})
export class EditTeamComponent implements OnInit {

  public badges: Badge[] = badges;

  public selectGoalActionSheetOptions: any = {
    header: 'Abzeichen wählen',
    subHeader: 'Zielabzeichen der Gruppe wählen',
  };
  public selectBadgeActionSheetOptions: any = {
    header: 'Abzeichen wählen',
    subHeader: 'Aktuelles Abzeichen des Teilnehmers',
  };

  public team: Team = {
    id: '',
    attendees: [],
    location: '',
    name: '',
    goal: '',
  };

  public newAttendee: Attendee = {
    id: uuid.v4(),
    lastName: '',
    firstName: '',
    birthDay: '',
    badge: '',
    lastRefresh: Date.now(),
  };

  private savedTeams: Team[] = [];
  private id: number;

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.storage.get('teams').then((teams: []) => {
          this.savedTeams = teams;
          this.team = this.savedTeams.filter(team => team.id === String(params['id']))[0];
        });
      }
    });

  }

  constructor(private router: Router, private route: ActivatedRoute, private storage: Storage, private location: Location) {
  }


  public updateTeam() {
    // remove current stored team item
    this.savedTeams = this.savedTeams.filter(team => team.id !== team.id);
    // push new team item and save to database
    this.savedTeams.push(this.team);
    this.storage.set('teams', this.savedTeams);
    this.router.navigate(['/teams/' + this.team.id], {replaceUrl: true});
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
