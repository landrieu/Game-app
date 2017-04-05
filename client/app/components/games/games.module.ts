import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { GamesComponent }    from './games.component';
import { DetailComponent }    from './detail.component';

import { UserService } from '../../services/user.service';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    GamesRoutingModule
  ],
  declarations: [
    GamesComponent,
    DetailComponent
  ],
  providers: [ UserService ]
})
export class GamesModule {}