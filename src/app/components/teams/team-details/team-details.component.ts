import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Storage} from '@ionic/storage';
import {Team} from '../../../interfaces/team.interface';

@Component({
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss'],
})
export class TeamDetailsComponent implements OnInit {

  private savedTeams: Team[] = [];
  public currentTeam: Team = null;
  private id: number;

  public ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.storage.get('teams').then((teams: []) => {
          this.savedTeams = teams;
          this.currentTeam = this.savedTeams.filter(team => team.id === String(params['id']))[0];
        });
      }
    });

  }

  constructor(private route: ActivatedRoute, private storage: Storage) {
  }

}
