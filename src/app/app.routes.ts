import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { UserListComponent } from '../components/user/user-list/user-list.component';
import { UserItemComponent } from '../components/user/userItem/userItemComponent';
import { UserEditComponent } from '../components/user/user-edit/user-edit.component';

export const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' }, 
  { path: 'app', component: AppComponent },            
  { path: 'user-list', component: UserListComponent }, 
  { path: 'user/:id', component: UserItemComponent }, 
  { path: 'user/:id/edit', component: UserEditComponent }, 

];