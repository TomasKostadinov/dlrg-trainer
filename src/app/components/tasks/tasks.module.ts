import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckTaskComponent} from './check-task/check-task.component';
import {CounterTaskComponent} from './counter-task/counter-task.component';
import {DistanceTaskComponent} from './distance-task/distance-task.component';
import {IonicModule} from '@ionic/angular';
import {TaskListRendererComponent} from './task-list-renderer/task-list-renderer.component';
import {TimerTaskComponent} from './timer-task/timer-task.component';
import {ClockService} from '../../services/clock-service/clock.service';
import {DistanceTimerTaskComponent} from './distance-timer-task/distance-timer-task.component';
import {FormsModule} from '@angular/forms';
import {TasklistTaskComponent} from './tasklist-task/tasklist-task.component';

@NgModule({
  declarations: [
    CheckTaskComponent,
    CounterTaskComponent,
    DistanceTaskComponent,
    TasklistTaskComponent,
    TaskListRendererComponent,
    TimerTaskComponent,
    DistanceTimerTaskComponent,
  ],
  providers: [
    ClockService
  ],
  exports: [
    CheckTaskComponent,
    CounterTaskComponent,
    DistanceTaskComponent,
    TasklistTaskComponent,
    TaskListRendererComponent,
    TimerTaskComponent,
    DistanceTimerTaskComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class TasksModule { }
