import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceComponent } from '../user-service/user-service.component';
import { User } from '../../../models/user';
import { FormsModule } from '@angular/forms';  // Import de FormsModule pour ngModel
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule, CommonModule], 
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  user: User | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserServiceComponent
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));
    const fetchedUser = this.userService.getUserById(userId);

    if (fetchedUser) {
      this.user = new User(
        fetchedUser.id,
        fetchedUser.name,
        fetchedUser.firstName,
        fetchedUser.role,
        fetchedUser.email,
        fetchedUser.tel
      );
    } else {
      console.error('User not found!');
    }
  }

  saveUser(): void {
    if (this.user) {
      this.userService.updateUser(this.user);
      alert('User saved: ' + this.user.firstName + ' ' + this.user.name);
      this.router.navigate(['/user-list']);
    }
  }

  cancel(): void {
    this.router.navigate(['/user-list']);
  }
}
