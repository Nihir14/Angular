import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'counter-b',
  standalone: true,
  template: `
    <h3>Counter B</h3>

    <p>Value: {{ counter.value }}</p>

    <button (click)="counter.inc()">+1</button>
    <button (click)="counter.dec()">-1</button>
  `
})
export class CounterBComponent {
  constructor(public counter: CounterService) {}
}
