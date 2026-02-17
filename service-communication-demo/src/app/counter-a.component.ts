import { Component } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
  selector: 'counter-a',
  standalone: true,
  template: `
    <h3>Counter A</h3>

    <p>Value: {{ counter.value }}</p>

    <button (click)="counter.inc()">+1</button>
    <button (click)="counter.dec()">-1</button>
  `
})
export class CounterAComponent {
  constructor(public counter: CounterService) {}
}
