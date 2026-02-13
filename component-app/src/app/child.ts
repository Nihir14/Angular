import {
  Component,
  Input,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  SimpleChanges,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.html',
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() data!: string;

  @ViewChild('myDiv') divElement!: ElementRef;

  constructor() {
    console.log('1️⃣ Constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('2️⃣ ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('3️⃣ ngOnInit');
  }

  ngDoCheck() {
    console.log('4️⃣ ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('5️⃣ ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('6️⃣ ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('7️⃣ ngAfterViewInit');
    console.log('ViewChild Element:', this.divElement.nativeElement);
  }

  ngAfterViewChecked() {
    console.log('8️⃣ ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('9️⃣ ngOnDestroy');
  }
}
