import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent }    from './games.component';
import { DetailComponent }    from './detail.component';

const gamesRoutes: Routes = [
  { path: 'games',  component: GamesComponent },
  { path: 'games/detail/:id',  component: DetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forChild(gamesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class GamesRoutingModule { }