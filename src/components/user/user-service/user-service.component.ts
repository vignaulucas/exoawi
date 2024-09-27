import { Injectable } from '@angular/core';
import { User } from '../../../models/user';

@Injectable({
  providedIn: 'root' // Fournit le service au niveau racine pour qu'il soit accessible dans toute l'application
})
export class UserServiceComponent {
  private users: User[] = [
    new User(1, 'Doe', 'John', 'Admin', 'john.doe@example.com', '123-456-7890'),
    new User(2, 'Smith', 'Jane', 'User', 'jane.smith@example.com', '234-567-8901'),
    new User(3, 'Blue', 'Alice', 'Manager', 'alice.blue@example.com', '345-678-9012'),
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }

  hasUsers(): boolean {
    return this.users.length > 0;
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    } else {
      console.error('User not found!');
    }
  }
}
