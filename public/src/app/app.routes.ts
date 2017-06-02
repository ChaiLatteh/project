import { Routes, RouterModule } from '@angular/router';
import { LogregComponent } from './logreg/logreg.component';
import { RegisterComponent } from './logreg/register/register.component';
import { LoginComponent } from './logreg/login/login.component';
import { IndexComponent } from './index/index.component';
import { GameComponent } from './index/game/game.component';
import { LeaderboardComponent } from './index/leaderboard/leaderboard.component';


const APP_ROUTES: Routes = [
  // {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LogregComponent},
  {path: '', component: IndexComponent, children: [
    {path: '', component: GameComponent },
    {path: 'leaderboard', component: LeaderboardComponent },
  ]},
]
export const routing = RouterModule.forRoot(APP_ROUTES);
