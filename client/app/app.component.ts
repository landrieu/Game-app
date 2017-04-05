import { Component, Input, OnChanges, SimpleChange} from '@angular/core';
import {TaskService} from './services/task.service';
import {UserService} from './services/user.service';
import {Http, Headers} from '@angular/http';



@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  //providers: [TaskService, UserService]
})
export class AppComponent {
  title = 'Minimal NgModule';
  logged : boolean = false;
  signed : boolean;

  constructor(){
    if(sessionStorage.getItem("logged")=="Yes") 
          {
              this.signed = true;
          }else
          {
              this.signed = false;
          }
         // console.log("i"+this.signed);
    }
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

        console.log("CHANGE");
    }
    change(){
      this.signed=!this.signed;
    }
}
