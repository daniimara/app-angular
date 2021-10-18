import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

import { IClients } from '../models/clients.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
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
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.value) {
        this.userService.removeUser(id).subscribe(
          (ok) => {
            Swal.fire({
              title: 'Deleted!',
              text: 'Your file hs been deleted.',
              icon: 'success',
            }).then((result) => {
              this.ngOnInit();
            });
          },
          (err) => {
            Swal.fire('Error!', 'User not found.', 'error');
          }
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'Your data file is safe :)', 'error');
      }
    });
  }
}
