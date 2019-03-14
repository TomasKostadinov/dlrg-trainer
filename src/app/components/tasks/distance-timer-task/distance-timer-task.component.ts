import {Component, EventEmitter, Input, Output} from '@angular/core';
import {DistanceTimerTask} from '../../../interfaces/badge.interface';
import {Validator} from '../../../interfaces/validator.interface.';

@Component({
  selector: 'distance-timer-task',
  templateUrl: './distance-timer-task.component.html',
  styleUrls: ['./distance-timer-task.component.scss'],
})
export class DistanceTimerTaskComponent {

  @Input() task: DistanceTimerTask;
  @Output() validatorEvent = new EventEmitter<Validator>();

  public sendValidation() {
    const status: Validator = {
      valid: false,
      value: false,
    };
    this.validatorEvent.emit(status);
  }
}
