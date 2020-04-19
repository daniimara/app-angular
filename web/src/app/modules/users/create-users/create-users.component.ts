import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../services/users.service';

interface ICreateUser {
  name: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {
  userForm: FormGroup;
  hasError: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private userService: UsersService,
    private router: Router
  ) {}

  ngOnInit() {
    this.userForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      username: [null, Validators.required],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });

    this.userForm.valueChanges.pipe();
  }

  createUser(user: ICreateUser) {
    this.userService.createUser(user).subscribe(
      (newUser: any) => {
        this.router.navigate(['/users/list']);
      },
      err => console.log(err)
    );
  }
}
