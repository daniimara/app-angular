import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { IClients } from '../models/clients.model';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  getUser(): Observable<IClients[]> {
    return this.http.get<IClients[]>(`${environment.url}/users`);
  }

  getUserById(id: string): Observable<IClients> {
    return this.http.get<IClients>(`${environment.url}/users/${id}`);
  }

  createUser(user: any) {
    return this.http.post(`${environment.url}/users`, user);
  }

  updateUser(id: any, user: any) {
    return this.http.patch(`${environment.url}/users/${id}`, user);
  }

  removeUser(id: any) {
    return this.http.delete(`${environment.url}/users/${id}`);
  }
}
