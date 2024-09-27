import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user';
import { UserServiceComponent } from '../user-service/user-service.component';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from '../userItem/userItemComponent';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserServiceComponent]
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserServiceComponent) {}

  ngOnInit(): void {
    if (!this.userService.hasUsers()) {
      console.error('Users not initialized! Please ensure users are loaded.');
    }
    this.users = this.userService.getUsers();
  }
}
