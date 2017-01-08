import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../shared/models/user';

@Component({
  selector: 'user-form',
  //stylesUrl:
  styles: [`
    form   {
      padding: 10px;
      /*background: #ECF0F1;*/
      background: lightgreen;
      border-radius: 3px;
      margin-bottom: 30px;
    }
  `],
  //templateUrl
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()" *ngIf="active">
      <div>
         user-form.component, form (#form) {{form.valid}}
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': name.invalid && name.touched }">
        <input type="text" class="form-control" name="name" placeholder="Name" required
          [(ngModel)]="newUser.name" #name="ngModel">

      <!-- 
       [(ngModel)]="newUser.name" // banana box into ng model 
       #name="ngModel">           // direct template reference 
      -->

        <span class="help-block" *ngIf="name.invalid && name.touched">Some Name is required.</span>
      </div>

      <div class="form-group" [ngClass]="{ 'has-error': username.invalid && username.touched }">
        <input type="text" class="form-control" name="username" placeholder="Username" required
          [(ngModel)]="newUser.username" #username="ngModel">

        <span class="help-block" *ngIf="username.invalid && username.touched">Some Username is required.</span>
      </div>

      <!-- form.invalid - form referenced directly to "#form" attribute in the element form --> 
      <!-- button is disabled when form.invalid, invalid when input HTML element is required are empty--> 
      
      <button type="submit" class="btn btn-lg btn-block btn-primary" [disabled]="form.invalid">
        Create User
      </button>

    </form>
  `
})
export class UserFormComponent {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  onSubmit() {
    // show the event that the user was created
    this.userCreated.emit({ user: this.newUser });

    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}