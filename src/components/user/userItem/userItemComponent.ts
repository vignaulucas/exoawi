import { Component, Input, SimpleChanges } from "@angular/core";
import { User } from "../../../models/user";
import { CommonModule } from '@angular/common';
import { MessageService } from "../../messages/message.service";

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'userItem.component.html',
  styleUrls: ['userItem.component.css']
})
export class UserItemComponent {
  @Input() user!: User;
  constructor(public messageService: MessageService) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      const userName = this.user.name;
      this.messageService.log(`User name: ${userName}`);
    }
  }
}
