import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgSwitch } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgSwitch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isLoggedIn = true;
  protected readonly title = signal('structural-directives');
  users = ['Ram', 'Shyam', 'Hari'];
  role = 'admin';
}
