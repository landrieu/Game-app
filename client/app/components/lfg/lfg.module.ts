import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { LfgComponent }    from './lfg.component';
import { PostComponent }    from './post.component';

import { UserService } from '../../services/user.service';
import { LfgService } from '../../services/lfg.service';
import { LfgRoutingModule } from './lfg-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LfgRoutingModule
  ],
  declarations: [
    LfgComponent,
    PostComponent
  ],
  providers: [ LfgService, UserService ]
})
export class LfgModule {}