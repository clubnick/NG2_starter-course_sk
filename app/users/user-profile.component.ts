// this is input component
import { Component, Input } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-profile',
  // there is used user class instance here, it have to be used @input by export
  template: `
    <div class="jumbotron" *ngIf="user">
      <div>
        user-profile.component (AS INPUT)
      </div>
      <h2>{{ user.name }} <small>{{ user.username }}</small></h2>

      <span>Name:</span> <input class="form-control" [(ngModel)]="user.name">
      <span>Username:</span> <input class="form-control" [(ngModel)]="user.username">
    </div>
  `
})
export class UserProfileComponent {
  // Input as declarator is imported above in the 1st line
  // it puts Info into compoenent
  @Input() user: User;
}