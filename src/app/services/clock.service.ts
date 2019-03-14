import {Injectable} from '@angular/core';
import {interval, Subject} from 'rxjs';

@Injectable()
export class ClockService {
  public time$: Subject<number> = new Subject<number>();

  constructor() {
    interval(1000).subscribe(() => {
      this.time$.next(Date.now());
    });
  }
}
