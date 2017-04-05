import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LfgComponent }    from './lfg.component';
import { PostComponent }    from './post.component';


const lfgRoutes: Routes = [
  { path: 'lfg',  component: LfgComponent },
  { path: 'lfg/post',  component: PostComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(lfgRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LfgRoutingModule { }