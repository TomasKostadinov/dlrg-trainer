import {Component, Input, OnInit} from '@angular/core';
import {DistanceTimerTask} from '../../../interfaces/badge.interface';

@Component({
  selector: 'distance-timer-task',
  templateUrl: './distance-timer-task.component.html',
  styleUrls: ['./distance-timer-task.component.scss'],
})
export class DistanceTimerTaskComponent implements OnInit {

  @Input() task: DistanceTimerTask;
  constructor() { }

  ngOnInit() {}

}
