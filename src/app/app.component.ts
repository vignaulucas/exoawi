import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../models/user';
import { UserListComponent } from '../components/user/user-list/user-list.component';
import { MessageComponent } from '../components/messages/messages.component';
import { MessageService } from '../components/messages/message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserListComponent, MessageComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  users: User[] = [];
  private userCount: number = 3;
  title = 'myapp';

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.users = [
      new User(1, 'Doe', 'John', 'Admin', 'john.doe@example.com', '123-456-7890'),
      new User(2, 'Smith', 'Jane', 'User', 'jane.smith@example.com', '234-567-8901'),
      new User(3, 'Blue', 'Alice', 'Manager', 'alice.brown@example.com', '345-678-9012'),
    ];

    this.messageService.log('AppComponent initialized with users.');
  }

  addNewUser(): void {
    this.userCount++; 
    const newUser = new User(
      this.userCount, 
      `Test${this.userCount}`, 
      `${this.userCount}`, 
      'User', 
      `newuser${this.userCount}@example.com`,
      '000-000-0000' 
    );
    
    this.users.push(newUser);
    this.messageService.log(`New user added: ${newUser.name}`);
    this.messageService.log(`User list updated. Number of users: ${this.users.length}`);
  }

  ngOnDestroy(): void {
    this.users = [];
    this.messageService.log('AppComponent destroyed.');
  }
}
