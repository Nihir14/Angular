import { Component, signal } from '@angular/core';
import { LoggerService } from './Logger.service';

@Component({
  selector: 'app-root',
  template: `<button (click)="test()">Click </button>`
})
export class App {
  protected readonly title = signal('dependency-injection');
  constructor(private logger: LoggerService) {}
  test() {
    this.logger.log('Button clicked!');
  }
}
