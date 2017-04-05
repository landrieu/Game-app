import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class PreferenceService{
    constructor (private http:Http){
        console.log('Preference Servcie Initialized ...');
    }
    getCharacters(){
        return this.http.get('/pfr/characters')
            .map(res => res.json());
    }
    getCharactersForOne(username:any){
        return this.http.get('/pfr/character/'+username)
            .map(res => res.json());
    }
    /*addGame(newGame:any){
        //console.log(newGame);
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post('/gm/game', JSON.stringify(newGame),{headers:headers})
            .map(res => res.json());
    }
    deleteGame(id:any){
        return this.http.delete('/gm/game/'+id)
            .map(res => res.json());
    }
    updateStatus(game:any){
        var headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.put('/gm/game/'+game._id, JSON.stringify(game),{headers:headers})
            .map(res => res.json());
        
    }*/
}