import { Component,OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AlertService} from '../../services/alert.service';
//import { User } from '../../../User';
import { User } from './User';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'users',
  templateUrl: 'users.component.html',
})
export class UsersComponent {
    users : User[];
    hide: boolean =true;
    error: string;
    registered:boolean =false;
    model = new User("-1",'','','','',false,0,1);
    private router: Router;
    private alertService : AlertService;
    signed : boolean =false;

    constructor(private userService: UserService/*, private router : Router*/){
        this.userService.getUsers()
            .subscribe(users=> {
                this.users = users;
               // console.log(tasks);
            });
        if(sessionStorage.getItem("logged")=="Yes")
          {
              this.signed = true;
          }
    };
  
    addUser(event:any){
        var exist = false;
       //console.log(this.users);
        //event.preventDefault();
       

        var newUser = {
            name: this.model.name,
            username: this.model.username,
            password: this.model.password,
            email: this.model.email,
            timezone: 0,
            age: 1
        }

         this.users.forEach(function(element){
            //console.log(element.name);
            if(element.username==newUser.username)
            {
                exist=true;
            }
        });

        if(exist==false)
        {
        this.error="";
        this.hide=true;
        this.registered=true;
        this.userService.addUser(newUser)
            .subscribe(user => {
                this.users.push(user);
                this.model.name='';
                this.model.username='';
                this.model.password='';
                //this.model.email='';
            })
                    //this.alertService.success('Registration successful', true);
                    //this.router.navigate(['../usrhome']);
        }
        else
        {
            this.hide=false;
            this.registered=false;
            this.error="This user exists";
        }
        //console.log(this.title);
    }
    deleteUser(id:any){
        var users = this.users;
        this.userService.deleteUser(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0; i < users.length; i++){
                    if(users[i]._id == id)
                    {
                        users.splice(i,1);
                    }
                }
            }
        });
    }
}