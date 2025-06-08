import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.css'
})
export class App {
  protected title = 'This is my first app';

  firstName = 'Mourat';
  lastName = 'Achoi';
}
