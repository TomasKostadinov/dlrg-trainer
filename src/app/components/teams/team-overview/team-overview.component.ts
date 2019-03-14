import {Component, OnInit} from '@angular/core';
import {Team} from '../../../interfaces/team.interface';
import {Storage} from '@ionic/storage';

@Component({
  templateUrl: './team-overview.component.html',
  styleUrls: ['./team-overview.component.scss'],
})
export class TeamOverviewComponent implements OnInit {

  public savedTeams: Team[] = [];

  constructor(private storage: Storage) {
  }

  ngOnInit() {
    this.storage.get('teams').then((teams: []) => {
      this.savedTeams = teams;
    });
  }

}
