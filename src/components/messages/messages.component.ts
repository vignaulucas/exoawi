import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { CommonModule } from '@angular/common';

@Component({
 selector: 'app-message',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './messages.component.html',
 styleUrl: './messages.component.css'
})
export class MessageComponent implements OnInit {
 messages: string[] = [];

 constructor(public messageService: MessageService) {}
 ngOnInit(): void {
 this.messageService.log('MessageComponent initialized \n');
 this.messageService.log('that works great \n');
 }

 clearMessages(): void {
 this.messageService.clear();
 }
}