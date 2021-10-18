import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ILogin } from '../models/login.model';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  doLogin(payload: ILogin): Observable<ILogin> {
    return this.http.post<ILogin>(`${environment.url}/login`, payload);
  }
}
