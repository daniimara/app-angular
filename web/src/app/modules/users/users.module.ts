import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CreateUsersComponent } from './create-users/create-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserResolveService } from './services/user-resolve.service';
import { UsersService } from './services/users.service';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [CommonModule, SharedModule, UsersRoutingModule],
  declarations: [
    ListUsersComponent,
    EditUsersComponent,
    UsersComponent,
    CreateUsersComponent
  ],
  providers: [UsersService, UserResolveService]
})
export class UsersModule {}
