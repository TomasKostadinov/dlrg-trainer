import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CheckTaskComponent} from './check-task/check-task.component';
import {CounterTaskComponent} from './counter-task/counter-task.component';
import {DistanceTaskComponent} from './distance-task/distance-task.component';
import {IonicModule} from '@ionic/angular';
import {TaskListRendererComponent} from './task-list-renderer/task-list-renderer.component';
import {TimerTaskComponent} from './timer-task/timer-task.component';
import {ClockService} from '../../services/clock.service';
import {DistanceTimerTaskComponent} from './distance-timer-task/distance-timer-task.component';
import {TaskComponent} from './task/task.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    CheckTaskComponent,
    CounterTaskComponent,
    DistanceTaskComponent,
    TaskListRendererComponent,
    TimerTaskComponent,
    DistanceTimerTaskComponent,
    TaskComponent
  ],
  providers: [
    ClockService
  ],
  exports: [
    CheckTaskComponent,
    CounterTaskComponent,
    DistanceTaskComponent,
    TaskListRendererComponent,
    TimerTaskComponent,
    DistanceTimerTaskComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class TasksModule { }
