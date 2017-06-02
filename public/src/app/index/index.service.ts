import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class IndexService {

  constructor(private _http:Http) { }
  getCurrentUser(){
    return this._http.get('api/current')
    .map((response:Response)=>response.json())
    .toPromise()
  }
  updateCurrentUser(){
    return this._http.get('api/current/update')
    .map((response:Response)=>response.json())
    .toPromise()
  }
  buttonClicked(user){
    return this._http.post('api/button_clicked', user)
    .map((response:Response)=>response.json())
    .toPromise()
  }
  leaderboard(){
    return this._http.get('api/leaderboard')
    .map((response:Response)=>response.json())
    .toPromise()
  }
  silver(user){
    return this._http.post('api/silver', user)
    .map((response:Response)=>response.json())
    .toPromise()
  }
  gold(user){
    return this._http.post('api/gold', user)
    .map((response:Response)=>response.json())
    .toPromise()
  }
}
