import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

import { IClients } from '../models/clients.model';
import { UsersService } from './users.service';

@Injectable()
export class UserResolveService implements Resolve<IClients> {
  constructor(private userService: UsersService) {}

  resolve(route: ActivatedRouteSnapshot) {
    const id = localStorage.getItem('id');
    return this.userService.getUserById(id);
  }
}
