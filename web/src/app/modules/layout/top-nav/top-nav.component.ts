import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IUser } from '../models/user.model';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  user: IUser;
  constructor(private router: Router) {}

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('data'));
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
