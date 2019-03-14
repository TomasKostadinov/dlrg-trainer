import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CheckTask} from '../../../interfaces/badge.interface';
import {Validator} from '../../../interfaces/validator.interface.';

@Component({
  selector: 'check-task',
  templateUrl: './check-task.component.html',
  styleUrls: ['./check-task.component.scss'],
})
export class CheckTaskComponent {

  @Input() task: CheckTask;
  @Output() validatorEvent = new EventEmitter<Validator>();
  public checked: boolean = false;

  public sendValidation() {
    let status: Validator = {
      valid: !this.checked,
      value: !this.checked,
    };
    this.validatorEvent.emit(status);
  }
}
