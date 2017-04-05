import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {GameService} from '../../services/game.service';
import {PreferenceService} from '../../services/preference.service';
//import { User } from '../../../User';
import { User } from '../users/User';
import { Game } from '../users/Game';



@Component({
  moduleId: module.id,
  selector: 'signout',
  templateUrl: 'signout.component.html',
})
export class SignOutComponent {
    signed : boolean;
     constructor(){
         if(sessionStorage.getItem("logged")=="Yes") 
          {
              this.signed = false;
              sessionStorage.setItem("logged","No");
          }
     }

    
 
  
}
