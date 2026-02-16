import { Component } from '@angular/core';
 
@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer style="background:lightgray;padding:10px">
      <p>Shared Footer</p>
    </footer>
  `
})
export class FooterComponent {}