import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html'
})
export class App {
  name: string = 'Remya';
  age: number = 25;
 
  updateName() {
    this.name = 'Angular User';
  }
 
  reset() {
    this.name = '';
    this.age = 0;
  }
}