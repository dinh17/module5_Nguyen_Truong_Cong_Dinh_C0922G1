import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedColor = '';
  colors: string[] = [
    'Red',
    'Orange',
    'Yellow',
    'Green',
    'Blue',
    'Purple'
  ];
}
