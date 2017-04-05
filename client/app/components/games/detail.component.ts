import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {GameService} from '../../services/game.service';
import {PreferenceService} from '../../services/preference.service';
//import { User } from '../../../User';
import { User } from '../users/User';
import { Game } from '../users/Game';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'detail',
  templateUrl: 'detail.component.html',
})
export class DetailComponent {
    id: string;
    game= new Game("","",[],[],"","",0,"");
    dirname = __dirname+"/";

    constructor(private route:ActivatedRoute, private gameService: GameService){
        this.id = route.snapshot.url[2].path;
        console.log("ID: "+this.id);
        this.gameService.getGame(this.id)
            .subscribe(game => {
                this.game= game;
            });
            this.game.path = __dirname+'/'+ this.game.path;
    }
  
}
