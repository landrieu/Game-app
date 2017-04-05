import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ProfileComponent }    from './profile.component';



import { UserService } from '../../services/user.service';
import { GameService } from '../../services/game.service';
import { PreferenceService } from '../../services/preference.service';
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [ UserService, GameService, PreferenceService ]
})
export class ProfileModule {}