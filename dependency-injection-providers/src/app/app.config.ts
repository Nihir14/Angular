import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

/* =========================
   GLOBAL TOKEN
========================= */

export interface AppSettings {
  apiUrl: string;
  appName: string;
}

export const APP_CONFIG = new InjectionToken<AppSettings>('app.config');

/* =========================
   VALUES
========================= */

const SETTINGS: AppSettings = {
  apiUrl: 'https://api.example.com',
  appName: 'Angular DI Demo'
};

/* =========================
   MAIN APPLICATION CONFIG
========================= */

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),

    { provide: APP_CONFIG, useValue: SETTINGS }
  ]
};
