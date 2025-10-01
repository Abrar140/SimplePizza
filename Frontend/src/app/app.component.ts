import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // imports: []
})
export class AppComponent {
  title = 'my-pizza-shop';
  constructor(private readonly router:Router){
    
  }

  onActivate(event:unknown){
    console.log(event)
  }
}
