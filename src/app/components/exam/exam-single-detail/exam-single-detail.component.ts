import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Badge} from '../../../interfaces/badge.interface';
import {badges} from '../../../config/badges.config';

@Component({
  templateUrl: './exam-single-detail.component.html',
  styleUrls: ['./exam-single-detail.component.scss'],
})
export class ExamSingleDetailComponent implements OnInit {

  private badges: Badge[] = badges;
  public currentBadge: Badge = null;
  private route: ActivatedRoute;
  private id: number;

  public ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.currentBadge = this.badges.filter(badgeItem => badgeItem.id === this.id)[0];
  }

  constructor(route: ActivatedRoute) {
    this.route = route;
  }
}
