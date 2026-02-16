import { Component } from '@angular/core';
 
@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header style="background:lightblue;padding:10px">
      <h2>Shared Header</h2>
    </header>
  `
})
export class HeaderComponent {}