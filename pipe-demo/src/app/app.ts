import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapitalizePipe } from './capitalize.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CapitalizePipe],
  templateUrl: './app.html'
})
export class App {

  title = 'angular custom pipe demo';
  message = 'welcome to angular pipes';

}
