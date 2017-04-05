import { Component } from '@angular/core';
import {UserService} from '../../services/user.service';
//import { User } from '../../../User';
import { User } from '../users/User';
import { Router, ActivatedRoute, Params } from '@angular/router';
//import { LocalStorageModule } from 'angular-2-local-storage';
//import { LocalStorageService } from 'angular-2-local-storage'; 

//import * as sha1 from 'js-sha1';


@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.component.html',
})
export class LoginComponent {
    
    loading = false;
    users : User[];
    returnUrl: string;
    model = new User('-1','','','','',false,0,1);
    logged : boolean =false;
    problem : boolean=false;
    signed : boolean = false;
    valid : boolean =true;
    reset : boolean = false;
    email : string;
    sent : boolean = true;

    constructor(private route: ActivatedRoute,private router: Router,private userService: UserService){
        this.userService.getUsers()
            .subscribe(users=> {
                this.users = users;
                console.log(users);
            });
            console.log(this.users);
          if(sessionStorage.getItem("logged")=="Yes") 
          {
              this.signed = true;
          }
    }
    
        

    signIn()
    {
        var newUser = {
          username : this.model.username,
          password : this.model.password
        }
        var logged = false;
        var valid = true;
        this.users.forEach(function(element){
            //console.log(element.name);
            if(element.username == newUser.username  && element.password == newUser.password)
            {
             
                logged = true;

                if(element.valid){
                    sessionStorage.setItem("user",element.username);
                    sessionStorage.setItem("id",element._id.toString());
                    sessionStorage.setItem("logged","Yes");
                     console.log("V:"+logged);
                }
                else{
                    valid = false;
                }
                
                
            }
            //console.log("Log");
        });
          //console.log("A:"+logged+" B:"+valid);
        if(logged && valid)
        {
          //this.logged = true;
          this.problem = false;
          this.signed = true;
          this.valid = true;
        }
        
        if(logged && !valid){
          this.valid = false;
          //this.logged = false;
          this.problem = false;
        }
        if(!logged){
          //this.logged = false;
          this.problem = true;
          this.valid = true;
        }
        
    }
    passwordForgot(){
        this.reset =!this.reset;
    }
    sendEmail(){
        var id ;
        console.log("HERE");
        //console.log("O?: "+this.email);
        this.userService.findUserByEmail(this.email)
            .subscribe(user1 => {
                //console.log(user);
                //id=user._id;
                //console.log("ASq"+user._id);
                if(user1 != null){
                    this.userService.passwordForgot(this.email,user1._id)
                    .subscribe(user=> {
                    
                });
                }else{
                    console.log("User not found");
                }
                
            });
            //console.log("AS"+id);
        
        this.reset =!this.reset;
        this.sent=!this.sent;
        
    }

    
        
    
    
}