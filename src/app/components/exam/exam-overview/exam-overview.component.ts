import {Component, OnInit} from '@angular/core';
import {Team} from '../../../interfaces/team.interface';
import {Storage} from '@ionic/storage';
import {ActionSheetController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Badge} from '../../../interfaces/badge.interface';
import {badges} from '../../../config/badges.config';

@Component({
  templateUrl: './exam-overview.component.html',
  styleUrls: ['./exam-overview.component.scss'],
})
export class ExamOverviewComponent implements OnInit {

  public savedTeams: Team[] = [];
  public badges: Badge[] = badges;

  constructor(private router: Router, private storage: Storage, private actionSheetController: ActionSheetController) {
  }

  ngOnInit() {
    this.storage.get('teams').then((teams: []) => {
      this.savedTeams = teams;
    });
  }

  async onClick(team: Team) {

    const userList: any[] = [];
    for (const attendee of team.attendees) {
      userList.push({
        text: attendee.firstName + ' ' + attendee.lastName,
        icon: 'contact',
        handler: () => {
          this.router.navigate(['/badges/single/' + team.goal]);
        },
      });
    }

    const selectUserSheet = await this.actionSheetController.create({
      header: 'Person wählen',
      buttons: userList,
    });

    const actionSheet = await this.actionSheetController.create({
      header: 'Prüfung starten',
      buttons: [{
        text: 'Einzelne Person prüfen',
        role: 'destructive',
        icon: 'contact',
        handler: () => {
          selectUserSheet.present();
        },
      }, {
        text: 'Mehrere Personen prüfen',
        role: 'destructive',
        icon: 'contacts',
        handler: () => {
          this.router.navigate(['/badges/mass/' + team.id]);
        },
      },
      ],
    });
    await actionSheet.present();
  }

}
