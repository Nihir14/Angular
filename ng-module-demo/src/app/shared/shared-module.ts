import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';

@NgModule({
  imports: [CommonModule, HeaderComponent, FooterComponent],
  exports: [HeaderComponent, FooterComponent, CommonModule],
})
export class SharedModule {}
