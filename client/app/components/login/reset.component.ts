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
  selector: 'reset',
  templateUrl: 'reset.component.html',
})
export class ResetComponent {
    password : string;
    id : string;
    notFound : boolean = false;
    success : boolean = false;

    constructor(private route:ActivatedRoute, private userService : UserService) {
   

    this.id = route.snapshot.url[2].path;


    }
    reset(){
      var userGet;
      
          this.userService.getUser(this.id)
              .subscribe(user => {
                  
                  userGet = user;
                  //console.log(user);
                  if(user == null){
                    this.notFound = true;
                  }else{
                    this.notFound = false;

                    var _user = new User("","","","","",false,0,0);
                    _user=user;
                    _user.password = this.password;
                    
                    this.userService.updateUser(_user).subscribe(data => {
                      console.log("Profile Updated");
                    });
                    this.success = true;
                  }
              });
          
      
        
    }
    
}