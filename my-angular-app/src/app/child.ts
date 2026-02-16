import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  template: `
    <h3>Child Component</h3>

    <p>Count received from parent: {{ count }}</p>

    <button (click)="increment()">➕ Increment</button>
    <button (click)="decrement()">➖ Decrement</button>
  `
})
export class ChildComponent {

  @Input() count = 0;

  @Output() countChange = new EventEmitter<number>();

  increment() {
    this.countChange.emit(this.count + 1);
  }

  decrement() {
    this.countChange.emit(this.count - 1);
  }
}
