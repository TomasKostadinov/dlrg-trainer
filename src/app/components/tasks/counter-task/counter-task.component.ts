import {Component, Input, OnInit} from '@angular/core';
import {CounterTask} from '../../../interfaces/badge.interface';

@Component({
  selector: 'counter-task',
  templateUrl: './counter-task.component.html',
  styleUrls: ['./counter-task.component.scss'],
})
export class CounterTaskComponent implements OnInit {
  @Input() task: CounterTask;
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
