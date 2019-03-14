import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TaskListTask} from '../../../interfaces/badge.interface';
import {Validator} from '../../../interfaces/validator.interface.';

@Component({
  selector: 'tasklist-task',
  templateUrl: './tasklist-task.component.html',
  styleUrls: ['./tasklist-task.component.scss'],
})
export class TasklistTaskComponent {
  @Input() task: TaskListTask;
  @Output() validatorEvent = new EventEmitter<Validator>();
  public checked: boolean = false;
  public validCounts = 0;

  public receiveValidatorEvent($event: Validator) {
    if ($event.valid) {
      this.validCounts = this.validCounts + 1;
    } else if (this.validCounts !== 0) {
      this.validCounts = this.validCounts - 1;
    }
    this.sendValidation();
  }

  public sendValidation() {
    const status: Validator = {
      valid: this.task.tasks.length === this.validCounts,
      value: this.validCounts,
    };
    this.validatorEvent.emit(status);
  }
}
