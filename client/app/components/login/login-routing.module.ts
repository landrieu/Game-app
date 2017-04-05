import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }    from './login.component';
import { SignOutComponent }    from './signout.component';
import { ResetComponent }    from './reset.component';

const loginRoutes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'login/signout', component: SignOutComponent},
  { path: 'login/forgot/:id', component: ResetComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginRoutingModule { }