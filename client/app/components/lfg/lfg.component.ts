import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {GameService} from '../../services/game.service';
import {LfgService} from '../../services/lfg.service';
//import { User } from '../../../User';
import { Lfg } from './Lfg';
import { Game } from '../users/Game';
import { Router, ActivatedRoute, Params } from '@angular/router';
;

@Component({
  moduleId: module.id,
  selector: 'lfg',
  templateUrl: 'lfg.component.html',
})
export class LfgComponent {
    Lfg: Lfg[];
        constructor(private lfgService: LfgService){
        this.lfgService.getLFG()
            .subscribe(lfg=> {
                this.Lfg = lfg;
                console.log(lfg);
                
            });
        }
  
}
