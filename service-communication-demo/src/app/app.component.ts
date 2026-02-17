import { Component } from '@angular/core';
import { CounterAComponent } from './counter-a.component';
import { CounterBComponent } from './counter-b.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterAComponent, CounterBComponent],
  template: `
    <h1>Angular DI Singleton Demo</h1>

    <counter-a></counter-a>
    <hr>
    <counter-b></counter-b>
  `
})
export class AppComponent {}
