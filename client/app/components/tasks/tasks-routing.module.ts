import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent }    from './tasks.component';

const tasksRoutes: Routes = [
  { path: 'home',  component: TasksComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(tasksRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class TaskRoutingModule { }