import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LoginComponent }    from './login.component';
import { SignOutComponent }    from './signout.component';
import { ResetComponent }    from './reset.component';

import { UserService } from '../../services/user.service';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent,
    SignOutComponent,
    ResetComponent
  ],
  providers: [ UserService ]
})
export class LoginModule {}