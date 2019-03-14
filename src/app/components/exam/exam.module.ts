import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';

import {TasksModule} from '../tasks/tasks.module';
import {ExamSingleDetailComponent} from './exam-single-detail/exam-single-detail.component';
import {ExamOverviewComponent} from './exam-overview/exam-overview.component';
import {ExamMassDetailComponent} from './exam-mass-detail/exam-mass-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksModule,
    RouterModule.forChild([
      {
        path: 'single/:id',
        component: ExamSingleDetailComponent
      },
      {
        path: 'single/:id/:user',
        component: ExamSingleDetailComponent,
      },
      {
        path: 'mass/:id',
        component: ExamMassDetailComponent
      },
      {
        path: '',
        component: ExamOverviewComponent
      }
    ])
  ],
  declarations: [ExamOverviewComponent, ExamSingleDetailComponent, ExamMassDetailComponent]
})
export class ListPageModule {}
