import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {GameService} from '../../services/game.service';
import {LfgService} from '../../services/lfg.service';
//import { User } from '../../../User';
import { Lfg } from './Lfg';
import { Game } from '../users/Game';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'post',
  templateUrl: 'post.component.html',
})
export class PostComponent {
   Lfg = new Lfg("","","","","","","");
   Games: Game[];
   startTime = new Array();
   duration = new Array();
   posted: boolean = false;

        constructor(private lfgService: LfgService,private gameService: GameService){
          var i;
        this.gameService.getGames()
            .subscribe(games=> {
                this.Games = games;
                console.log(games);
                
            });
            for(i=1;i<13;i++){
                this.startTime.push(i.toString()+" AM");
            }
            for(i=1;i<13;i++){
                this.startTime.push(i.toString()+" PM");
            }
            for(i=0;i<5;i++){
                this.duration.push(i.toString()+":00 hour(s)");
                this.duration.push(i.toString()+":15 hour(s)");
                this.duration.push(i.toString()+":30 hour(s)");
                this.duration.push(i.toString()+":45 hour(s)");
            }
        }
        post(){
          console.log(this.Lfg.game);
          var newPost = {
            game: this.Lfg.game,
            type: this.Lfg.type,
            typeTeam: this.Lfg.typeTeam,
            timeStart: this.Lfg.timeStart,
            duration: this.Lfg.duration,
            description: this.Lfg.description
        }

        this.lfgService.postLfg(newPost)
            .subscribe(lfg => {
                this.Lfg.game='';
                this.Lfg.timeStart='';
                this.Lfg.type='';
                this.Lfg.typeTeam='';
                this.Lfg.duration='';
                this.Lfg.description='';
            });
            this.posted = true;
        }
        
  
}
