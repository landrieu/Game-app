import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { FormsModule } from '@angular/forms';
import { TasksComponent }  from './components/tasks/tasks.component';
import { UsersComponent }  from './components/users/users.component';
import { LoginComponent }  from './components/login/login.component';
import { ProfileComponent }  from './components/profile/profile.component';
import { GamesComponent }  from './components/games/games.component';
import { LfgComponent }  from './components/lfg/lfg.component';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'home', component: TasksComponent },
  { path: 'signup',        component: UsersComponent },
  { path: 'login',        component: LoginComponent },
  { path: 'profile',        component: ProfileComponent },
  { path: 'games',        component: GamesComponent },
  { path: 'lfg',        component: LfgComponent },
  { path: '',   redirectTo: '/signup', pathMatch: 'full' },
  { path: '**', component: UsersComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}