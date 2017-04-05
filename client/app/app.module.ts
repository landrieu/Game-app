import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { DatepickerModule } from 'ng2-bootstrap';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from './components/users/users.module';
import { TasksModule } from './components/tasks/tasks.module';
import { LoginModule } from './components/login/login.module';
import { ProfileModule } from './components/profile/profile.module';
import { GamesModule } from './components/games/games.module';
import { LfgModule } from './components/lfg/lfg.module';


import { TasksComponent }  from './components/tasks/tasks.component';
import { UsersComponent }  from './components/users/users.component';
import { LoginComponent }  from './components/login/login.component';
import { ProfileComponent }  from './components/profile/profile.component';
import { GamesComponent }  from './components/games/games.component';
import { HttpModule} from '@angular/http';




@NgModule({
  //imports:      [ RouterModule.forRoot(appRoutes),BrowserModule, HttpModule, FormsModule],
  imports:      [BrowserModule,FormsModule,HttpModule,UsersModule,
                 TasksModule,LoginModule,ProfileModule,GamesModule,
                 LfgModule,AppRoutingModule],
  providers:    [],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 

  constructor(){
       sessionStorage.setItem("logged","No");
       sessionStorage.setItem("user","");
}
}
