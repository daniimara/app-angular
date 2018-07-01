import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateUsersComponent } from './create-users/create-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserResolveService } from './services/user-resolve.service';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {
        path: 'list',
        component: ListUsersComponent
      },
      {
        path: 'edit',
        component: EditUsersComponent,
        resolve: { user: UserResolveService }
      },
      {
        path: 'create',
        component: CreateUsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
