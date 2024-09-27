import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceComponent } from '../user-service/user-service.component';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userItem.component.html',
  styleUrls: ['./userItem.component.css'],
  providers: [UserServiceComponent]
})
export class UserItemComponent implements OnInit {
  @Input() user?: User;
  userIdFromRoute: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private userService: UserServiceComponent
  ) {}

  ngOnInit(): void {
    if (!this.user) {
      this.route.paramMap.subscribe(params => {
        const userId = Number(params.get('id'));
        if (!isNaN(userId) && userId !== 0) {
          const fetchedUser = this.userService.getUserById(userId);
          if (fetchedUser) {
            this.user = fetchedUser;
          } else {
            console.error('User not found!');
            // Gérer le cas où l'utilisateur n'est pas trouvé
          }
        } else {
          console.error('Invalid user ID!');
          // Gérer le cas d'un ID invalide
        }
      });
    }
  }
  
}
