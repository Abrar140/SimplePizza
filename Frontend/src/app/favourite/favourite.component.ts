import { Component } from '@angular/core';
import { Pizza } from '../home/pizza.model';
import { FavouriteService } from './favourite.service';
import { CartService } from '../cart/cart.service';
import { ROUTER_TOKEN } from '../models/routing.model';
import { combineLatest, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  readonly ROUTER_TOKENS=ROUTER_TOKEN;
  private favourite:Pizza[]=[];

  constructor(private favouriteSrvc: FavouriteService,private route: ActivatedRoute, private cartSrvc: CartService){

  }
  ngOnInit(){
    combineLatest([
       this.favouriteSrvc.getFavourite(),
       this.route.queryParamMap

    ]).pipe(
      map(([favourites, params])=>{
        const category=params.get('category');
        if(!category) return favourites;
        return favourites.filter(f=>f.category===category);
      })
    )
   .subscribe(p=>{
    this.favourite=p
   })
  }






addToCart(pizza:Pizza){
  this.cartSrvc.add(pizza)
}
  getFavourite(){
    return this.favourite
  }
  removePizzaFromFavourite(pizza:Pizza){
    this.favouriteSrvc.remove(pizza)
  }
  

}
