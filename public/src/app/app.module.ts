import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routes';

import { AppComponent } from './app.component';
import { LogregComponent } from './logreg/logreg.component';
import { LogregService } from './logreg/logreg.service';
import { RegisterComponent } from './logreg/register/register.component';
import { LoginComponent } from './logreg/login/login.component';
import { IndexComponent } from './index/index.component';
import { IndexService } from './index/index.service';
import { LeaderboardComponent } from './index/leaderboard/leaderboard.component';
import { GameComponent } from './index/game/game.component';

@NgModule({
  declarations: [
    AppComponent,
    LogregComponent,
    RegisterComponent,
    LoginComponent,
    IndexComponent,
    LeaderboardComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
  ],
  providers: [LogregService, IndexService],
  bootstrap: [AppComponent]
})
export class AppModule { }
