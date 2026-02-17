import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // registers the service at the root level, making it available throughout the app
})
export class User {
  users = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'Jane Doe'},
    {id: 3, name: 'Jim Doe'},
  ];

  getUsers() {
    return this.users;
  }
}
