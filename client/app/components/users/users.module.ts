import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { UsersComponent }    from './users.component';

import { UserService } from '../../services/user.service';
import { UserRoutingModule } from './users-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UsersComponent
  ],
  providers: [ UserService ]
})
export class UsersModule {}