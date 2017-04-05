import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class GameService{
    constructor (private http:Http){
        console.log('Game Servcie Initialized ...');
    }
    getGames(){
        return this.http.get('/gm/games')
            .map(res => res.json());
    }
    getGame(id: any){
        return this.http.get('/gm/game/'+id)
            .map(res => res.json());
    }
    addGame(newGame:any){
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
        
    }
}