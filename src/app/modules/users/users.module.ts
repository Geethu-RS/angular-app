import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'user-list', component: UserListComponent},
  { path: 'user-edit', component: UserEditComponent},
];

@NgModule({
  declarations: [
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class UsersModule { }
