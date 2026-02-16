import { Component, signal } from '@angular/core';
import { ChildComponent } from './child';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  template: `
    <div>
  <h2>Parent Component</h2>
  <p>Count in parent: {{ count() }}</p>

  <app-child
    [count]="count()"
    (countChange)="updateCount($event)">
  </app-child>
</div>

  `,
  styleUrl: './app.css'
})
export class App {

  // parent state using signal (Angular 17+)
  count = signal(9);

  updateCount(newCount: number) {
    this.count.set(newCount);
  }
}
