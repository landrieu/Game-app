import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {UserService} from '../../services/user.service';
import { Task } from '../../../Task';
import { User } from '../users/User'

@Component({
    moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html',
})
export class TasksComponent {
    tasks : Task[];
    title: string;
    signed : boolean =false;
    nbUser: number;
    Users: User[];

    constructor(private taskService: TaskService, private userService: UserService){
        this.taskService.getTasks()
            .subscribe(tasks=> {
                this.tasks = tasks;
                console.log(this.tasks);
            });
        this.userService.getUsers()
            .subscribe(users =>{
                this.nbUser = users.length;
                this.Users = users;
                
            });
            
            if(sessionStorage.getItem("logged")=="Yes")
          {
              this.signed = true;
          }
          
    }
    addTask(event:any){

        
        console.log(this.tasks);
        event.preventDefault();
        var newTask = {
            title: this.title,
            isDone: false
        }
        this.taskService.addTask(newTask)
            .subscribe(task => {
                this.tasks.push(task);
                this.title='';
            })

        //console.log(this.title);
    }
    deleteTask(id:any){
        var tasks = this.tasks;
        this.taskService.deleteTask(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0; i < tasks.length; i++){
                    if(tasks[i]._id == id)
                    {
                        tasks.splice(i,1);
                    }
                }
            }
        });
    }
    updateStatus(task:any){
        var _task = {
            _id:task._id,
            title: task.title,
            isDone: !task.isDone
        };
        this.taskService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }
}
