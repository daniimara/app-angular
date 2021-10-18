import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

import { IClients } from '../models/clients.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  user: IClients;
  userForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.subscribe(user => (this.user = user['user']));

    this.userForm = this.fb.group({
      name: this.user.name,
      email: this.user.email,
      username: this.user.username,
      password: this.user.password
    });
  }

  editUser(user: any) {
    this.userService.updateUser(this.user._id, user).subscribe(
      ok => {
        this.msg('success', 'User has been saved');
        this.router.navigate(['/users/list']);
      },
      err => this.msg('error', 'User error')
    );
  }

  msg(type: any, title: any) {
    return Swal.fire({
      icon: type,
      title: title,
      showConfirmButton: false,
      timer: 1500
    });
  }
}
