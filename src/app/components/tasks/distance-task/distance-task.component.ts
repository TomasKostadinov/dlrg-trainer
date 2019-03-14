import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DistanceTask} from '../../../interfaces/badge.interface';
import {Validator} from '../../../interfaces/validator.interface.';

@Component({
  selector: 'distance-task',
  templateUrl: './distance-task.component.html',
  styleUrls: ['./distance-task.component.scss'],
})
export class DistanceTaskComponent implements OnInit {
  @Input() task: DistanceTask;
  @Output() validatorEvent = new EventEmitter<Validator>();
  public count: number = 0;

  public sendValidation() {
    const status: Validator = {
      valid: ((this.count * 25) === this.task.distance),
      value: this.count * 25,
    };
    this.validatorEvent.emit(status);
  }


  constructor() {
  }

  ngOnInit() {
  }

  public countUp() {
    this.count = this.count + 1;
    this.sendValidation();
  }

  public countDown() {
    this.count = this.count - 1;
    this.sendValidation();
  }
}
