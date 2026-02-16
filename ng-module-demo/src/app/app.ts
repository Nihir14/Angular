import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./shared/header";
import { UserDetailComponent } from "./user/user-detail";
import { FooterComponent } from "./shared/footer";
import { UserListComponent } from "./user/user-list";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
  <h1>
    Angular Modules Demo
  </h1>
  <app-header></app-header>
  <app-user-list></app-user-list>
  <app-footer></app-footer>
  `,
  imports: [HeaderComponent, FooterComponent, UserListComponent]
})


export class App {
  protected readonly title = signal('ng-module-demo');
}
