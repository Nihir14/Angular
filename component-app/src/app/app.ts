import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child';
 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildComponent],
  templateUrl: 'app.html'
})
 
export class AppComponent {
 
  title = 'Component Lifecycle Demo';
 
  parentData: string = 'Initial Data';
 
  showChild = true;
 
  changeData() {
    this.parentData = 'Updated Data ' + Math.random();
  }
 
  toggleChild() {
    this.showChild = !this.showChild;
  }
}
 
 