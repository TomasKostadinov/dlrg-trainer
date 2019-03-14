import {Component, Input, OnInit} from '@angular/core';
import {DistanceTask} from '../../../interfaces/badge.interface';

@Component({
  selector: 'distance-task',
  templateUrl: './distance-task.component.html',
  styleUrls: ['./distance-task.component.scss'],
})
export class DistanceTaskComponent implements OnInit {
  @Input() task: DistanceTask;
  public count: number = 0;
  constructor() { }

  ngOnInit() {}
  public countUp() {
    this.count = this.count + 1;
  }
  public countDown() {
    this.count = this.count - 1;
  }

}
