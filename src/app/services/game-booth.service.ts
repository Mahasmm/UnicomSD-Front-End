import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameBooth } from '../models/gameBooth.model';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GameBoothService {

  baseApiUrl: string = environment.baseApiUrl

  constructor(private http: HttpClient) { }

  addGameBooth(addGameBoothRequest:GameBooth){
    addGameBoothRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<GameBooth>(this.baseApiUrl +'/api/game-booth', addGameBoothRequest)
  }

  getGameBooths(){
    return this.http.get<GameBooth[]>(this.baseApiUrl+ '/api/game-booth');
  }

  deleteGameBooth(id:string){
    return this.http.delete<GameBooth>(this.baseApiUrl + '/api/game-booth/'+id);
  }

  updateGameBooth(id:string,updateGameBoothRequest: GameBooth){
    return this.http.put<GameBooth>(this.baseApiUrl + '/api/game-booth/'+id, updateGameBoothRequest);
  }

  getGameBooth(id: string){
    return this.http.get<GameBooth>(this.baseApiUrl + '/api/game-booth/'+id);
  }
}
