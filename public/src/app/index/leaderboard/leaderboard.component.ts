import { Component, OnInit } from '@angular/core';
import { IndexService } from './../index.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  users:Array<any>;
  constructor(
    private _indexService: IndexService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.leaderboard()
  }
  leaderboard(){
    this._indexService.leaderboard()
    .then((user)=>{
      this.users=user
    })
    .catch((err)=>console.log(err))
  }

}
