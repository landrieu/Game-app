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
  selector: 'profile',
  templateUrl: 'profile.component.html',
})
export class ProfileComponent {
    source=__dirname+'/photo/profile-default.jpg';
    signed : boolean = false;
    btnSubmit : boolean = false;
    testUsername = "cecile";
    testId :any = "58d85ce636bb0808e8b8a0ad";
    model = new User('-1','','','','',false,0,1);
    copyUser = new User('-1','','','','',false,0,1);
    users: User[];
    games: Game[];
    errorAge = false;
    firstMenu: string;
    gameSelected = new Game("1","default",[],[],"","",0,"");
    image : File;
    array : [true, false,true,true,false]

    constructor(private userService: UserService,private gameService: GameService, private preferenceService:PreferenceService){
          var id = this.testId;
          var model = new User('-1','','','','',false,0,1);

          this.userService.getUser(id)
              .subscribe(user => {
                  console.log(user);
                  this.model.name = user.name;
                  this.model.username = user.username;
                  this.model.email = user.email;
                  this.model._id = user._id;
                  this.model.age = user.age;

                this.copyUser.name = user.name;
                this.copyUser.username = user.username;
                this.copyUser.email = user.email;
                this.copyUser._id = user._id;
                this.copyUser.age = user.age;
              });
          this.gameService.getGames()
              .subscribe(games => {
                 this.games = games;
          });

            if(sessionStorage.getItem("logged")=="Yes")
            {
              this.signed = true;
            }
            
    }
    edit(){
      this.btnSubmit = !this.btnSubmit;
      //console.log(this.model.name);
    }
    update(){
      if(this.model.age>110 || this.model.age<1)
      {
        this.errorAge=true;
      }
      else{
          this.errorAge=false;
          this.copy();
          this.btnSubmit = !this.btnSubmit;

      var _user = {
            _id:this.model._id,
            name: this.model.name,
            username: this.model.username,
            email: this.model.email,
            age: this.model.age,
        };
      this.userService.updateUser(_user).subscribe(data => {
            console.log("Profile Updated");
        });
      }
      
    }

    load(){
      
      
    }
    copy(){
      
      this.copyUser.name = this.model.name;
      this.copyUser.username = this.model.username;
      this.copyUser.email = this.model.email;
      this.copyUser.age = this.model.age;
      
      console.log("ab: "+this.copyUser.name);
    }
    onChange(gameSelectedName:string) { 
      var gameSelected: Game;
      var nb;
      this.games.forEach(function(element:Game){
        if(element.name == gameSelectedName){
           gameSelected = element;
        }
      });
      this.gameSelected = gameSelected;
      //this.gameSelected.checked = [false,true];
      //this.gameSelected.checked.push(true);
      
      console.log(this.gameSelected);
      for(nb=0;nb<gameSelected.characters.length;nb++)
      {
          //if(gameSelected.characters == )
      }
      //gameSelected.push(this.array);

    }

    test(){
      var characters : Object;
      var tab = new String();
      var j = 1;
      console.log("TEST");

      this.preferenceService.getCharactersForOne(this.model.username)
              .subscribe(character => {
                 
                 console.log(character);

                 for (var i in character) {
                    if (character.hasOwnProperty(i) && i!="username" && i!="_id") {
                   
                      console.log(i + " -> " + character[i]);
                      j=+1;
                    }
                }
          });
          
    }
    upload(){
      console.log("UP");
    }
    
    
    
}