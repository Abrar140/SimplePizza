import { Component, Input } from '@angular/core';
import { PizzaService } from './pizza.service';
import { Pizza } from './pizza.model';
import { CartService } from '../cart/cart.service';
import { FavouriteService } from '../favourite/favourite.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() category!: string;
   pizzas: Pizza[]=[];
  constructor(private pizzaService:PizzaService, private cartSrvc: CartService, private favouriteSrvc: FavouriteService){}

  ngOnInit(){
    this.pizzaService.getPizzas().subscribe(pizza=>{
      this.pizzas=pizza
    })
  }

  addToCart(pizza:Pizza){
    this.cartSrvc.add(pizza)

  }

  addToFavourites(pizza:Pizza){
    this.favouriteSrvc.add(pizza)
  }
  
  getFilteredProducts():any{

    console.log(" ia inside Get FIltered Products ", this.category, this.pizzas)

   return  this.category=='All'?this.pizzas:
     this.pizzas.filter(p =>p.category===this.category)
  }


}
