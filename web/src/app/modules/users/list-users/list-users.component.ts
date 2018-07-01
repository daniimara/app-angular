import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { IClients } from '../models/clients.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users$: Observable<IClients[]>;

  constructor(private userService: UsersService, private router: Router) {}

  ngOnInit() {
    this.users$ = this.userService.getUser();
  }

  editUser(id: string) {
    localStorage.setItem('id', id);
    this.router.navigate(['/users/edit']);
  }

  removeUser(id: string) {
    Swal({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      this.userService.removeUser(id).subscribe(
        ok => {
          Swal('Deleted!', 'Your file hs been deleted.', 'success');
        },
        err => {
          Swal('Error!', 'User not found.', 'error');
        }
      );
    });
  }
}
