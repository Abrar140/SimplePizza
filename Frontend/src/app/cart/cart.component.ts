import { Component } from '@angular/core';
import { Pizza } from '../home/pizza.model';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  private cart: Pizza[]=[];
  constructor(private cartSrvc: CartService){

  }

  ngOnInit(){
    this.cartSrvc.getCart().subscribe({
      next: (cart)=>this.cart=cart
    })
  }


  getCart(){
    return this.cart
  }

  removePizzaFromCart(pizza: Pizza){
    this.cartSrvc.remove(pizza)
  }

  getTotalPrice():number{
    console.log("i am inside get total price total", this.cart)
    return this.cart.reduce((sum, pizza)=>sum+pizza.price * pizza.quantity, 0)
  }
}
