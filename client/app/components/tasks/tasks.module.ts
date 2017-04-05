import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { TasksComponent }    from './tasks.component';

import { TaskService } from '../../services/task.service';
import { TaskRoutingModule } from './tasks-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TaskRoutingModule
  ],
  declarations: [
    TasksComponent
  ],
  providers: [ TaskService ]
})
export class TasksModule {}