import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AllProductComponent } from './all-product/all-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports: [ AllProductComponent]
})
export class AppComponent {
  title = 'my-pizza-shop';
  constructor(private readonly router:Router){
    
  }

  onActivate(event:unknown){
    console.log(event)
  }
}
