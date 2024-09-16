import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { UserItemComponent } from '../userItem/userItemComponent';
import { MessageService } from '../../messages/message.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnChanges {
  @Input() users!: User[];

  constructor(private messageService: MessageService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['users']) {
      const numberOfUsers = this.users.length;
      this.messageService.log(`User list updated. Number of users: ${numberOfUsers}`);
    }
  }
}

