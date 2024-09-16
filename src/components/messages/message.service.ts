import { Injectable } from '@angular/core';

@Injectable({
 providedIn: 'root'
})
export class MessageService {
 private _messages: string[] = [];

 log(message: string) {
 this._messages.push(message);
 }

 clear() : void {
 this._messages = [];
 }

 get messages(): string[] {
 return this._messages;
 }
}