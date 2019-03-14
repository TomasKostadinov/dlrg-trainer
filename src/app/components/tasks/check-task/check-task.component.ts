import {Component, Input, OnInit} from '@angular/core';
import {CheckTask} from '../../../interfaces/badge.interface';

@Component({
  selector: 'check-task',
  templateUrl: './check-task.component.html',
  styleUrls: ['./check-task.component.scss'],
})
export class CheckTaskComponent implements OnInit {
  @Input() task: CheckTask;
  public checked: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }
}
