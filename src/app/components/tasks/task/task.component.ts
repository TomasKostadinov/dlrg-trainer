import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../interfaces/badge.interface';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {

  @Input() task: Task;

  constructor() {
  }

  ngOnInit() {
  }

}
