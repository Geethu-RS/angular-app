import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
  declarations: [
    UserEditComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
})
export class UsersModule { }
