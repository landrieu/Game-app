import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';
//import { AppConfig } from '../app.config';
//import { User } from '../models/index';

@Injectable()
export class UserService{
    constructor (private http:Http/*, private config: AppConfig*/){
        console.log('User Servcie Initialized ...');
    }
    getUsers(){
        return this.http.get('/usr/users')
            .map(res => res.json());
    }
    addUser(newUser:any){
        console.log(newUser);
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/usr/user', JSON.stringify(newUser),{headers:headers})
            .map(res => res.json());
    }
    deleteUser(id:any){
        return this.http.delete('/usr/user/'+id)
            .map(res => res.json());
    }
    getUser(id:any){
        return this.http.get('/usr/user/'+id)
            .map(res => res.json());
    }
    updateUser(user:any){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put('/usr/user/'+user._id, JSON.stringify(user),{headers:headers})
            .map(res => res.json());
    }
    

    passwordForgot(emailTo:any,id:any){
        
        var newUser = {
            email : emailTo,
            id : id
        }
        console.log("SERVICE"+newUser.id);
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/usr/user/reset/', JSON.stringify(newUser),{headers:headers})
            .map(res => res.json());
    }
    findUserByEmail(email :any){
        //console.log("SERVICE"+email);
        return this.http.get('/usr/user/findByEmail/'+email)
            .map(res => res.json());

    }
    

    
}