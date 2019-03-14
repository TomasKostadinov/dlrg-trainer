import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CounterTask} from '../../../interfaces/badge.interface';
import {Validator} from '../../../interfaces/validator.interface.';

@Component({
  selector: 'counter-task',
  templateUrl: './counter-task.component.html',
  styleUrls: ['./counter-task.component.scss'],
})
export class CounterTaskComponent implements OnInit {
  @Input() task: CounterTask;
  @Output() validatorEvent = new EventEmitter<Validator>();
  public count: number = 0;

  public sendValidation() {
    const status: Validator = {
      valid: (this.count === this.task.counts),
      value: this.count,
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
