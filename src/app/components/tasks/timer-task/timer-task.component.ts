import {Component, EventEmitter, Input, OnDestroy, Output} from '@angular/core';
import {DistanceTask} from '../../../interfaces/badge.interface';
import {ClockService} from '../../../services/clock-service/clock.service';
import {first} from 'rxjs/operators';
import {Validator} from '../../../interfaces/validator.interface.';

@Component({
  selector: 'timer-task',
  templateUrl: './timer-task.component.html',
  styleUrls: ['./timer-task.component.scss'],
})
export class TimerTaskComponent implements OnDestroy {
  @Input() task: DistanceTask;
  @Output() validatorEvent = new EventEmitter<Validator>();
  public startTime: number = 0;
  public endTime: number = 0;

  public sendValidation() {
    const status: Validator = {
      valid: true,
      value: this.endTime - this.startTime,
    };
    this.validatorEvent.emit(status);
  }

  constructor(private clock: ClockService) {
  }

  private startTimer() {
    this.clock.time$.pipe(
      first(),
    ).subscribe(
      time => {
        this.startTime = time;
      }, error => console.log(error),
    );
    this.clock.time$.subscribe(
      time => {
        this.endTime = time;
      }, error => console.log(error),
    );
  }

  ngOnDestroy() {
    this.clock.time$.unsubscribe();
  }

  public stopTimer() {
    this.clock.time$.unsubscribe();
    this.sendValidation();
  }
}
