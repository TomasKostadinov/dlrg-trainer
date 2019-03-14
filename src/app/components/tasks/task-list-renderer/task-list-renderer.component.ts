import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../../interfaces/badge.interface';

@Component({
  selector: 'task-list-renderer',
  templateUrl: './task-list-renderer.component.html',
  styleUrls: ['./task-list-renderer.component.scss'],
})
export class TaskListRendererComponent implements OnInit {
  @Input() tasks: Task;
  @Input() hideCard: boolean;
  constructor() { }

  ngOnInit() {}

}
