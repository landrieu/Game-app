import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
import {GameService} from '../../services/game.service';
import {PreferenceService} from '../../services/preference.service';
//import { User } from '../../../User';
import { User } from '../users/User';
import { Game } from '../users/Game';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { FileUploader } from 'ng2-file-upload';

// const URL = '/api/';
const URL = 'http://localho/';

@Component({
  moduleId: module.id,
  selector: 'games',
  templateUrl: 'games.component.html',
})
export class GamesComponent {
    platformGame : string;
    nameGame:string;
    arrayGame : Game[];
    allGame : Game[];
    notFound : boolean = false;
    dirname = __dirname+"/";


   constructor(private route: ActivatedRoute,private gameService: GameService,private userService: UserService){
        this.gameService.getGames()
            .subscribe(games=> {
                this.allGame = games;
            });
    }
  search(){
    var i,j,l;
    l=0;
    var R = new Array;
    var X = new Array;
    var p = this.platformGame;
    var nameG = this.nameGame;

    if(this.platformGame!= "All"){
      this.allGame.forEach(function(element){
        
          element.platforms.forEach(function(element2){
            
              if(element2 == p){
                  R.push(element);
              }

          });
          
    });
      this.arrayGame = R;
    }else{
      this.arrayGame = this.allGame;
    }

    
    if(this.nameGame != undefined && this.nameGame != ""){
     
      this.arrayGame.forEach(function(element){
            
              if(element.name == nameG){

                  X.push(element);
              }   
    });
    this.arrayGame = X;
    }
    
    if(this.arrayGame.length == 0){
      this.notFound=true;
    }else{
      
      this.notFound=false;
    }
    
    //console.log(this.arrayGame);
    
    
  }
 
  
}
