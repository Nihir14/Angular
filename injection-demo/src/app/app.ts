import { CommonModule } from '@angular/common';import { Component } from '@angular/core';
import { User } from './user';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html'
})
export class App {
  users: any[] = [];

  constructor(private userService: User) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
