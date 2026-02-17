import { Component, Inject } from '@angular/core';
import { LoggerService } from './logger.service';
import { NewLoggerService } from './new-logger.service';
import { ApiService } from './api.service';
import { APP_CONFIG, AppSettings } from './app.config';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h2>Angular DI Providers Example</h2>

    <button (click)="log()">Use logger</button>
    <button (click)="getapi()">Call API</button>
    <button (click)="showConfig()">Show Config</button>
  `,
  providers: [
    // Replace service implementation
    { provide: LoggerService, useClass: NewLoggerService },

    // Alias provider
    { provide: 'OLD_LOGGER', useExisting: LoggerService },

    // Factory provider
    { provide: ApiService, useFactory: () => new ApiService() },
  ],
})
export class App {

  constructor(
    private logger: LoggerService,
    private api: ApiService,

    @Inject('OLD_LOGGER') private oldLogger: LoggerService,
    @Inject(APP_CONFIG) private config: AppSettings
  ) {}

  log() {
    this.logger.log('Hello from logger');
    this.oldLogger.log('Hello from old logger');
  }

  getapi() {
    console.log(this.api.getData());
  }

  showConfig() {
    console.log('App Name:', this.config.appName);
    console.log('API URL:', this.config.apiUrl);
  }
}
