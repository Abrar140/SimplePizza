import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from '../home/pizza.model';

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.css'],
  standalone:true,
})
export class PizzaDetailComponent {
  @Input() pizza!:Pizza;
  @Input() isFavouriteView:boolean=false;

  @Output() buy = new EventEmitter();
  @Output()  favourite= new EventEmitter();
  @Output()  nonfavourite=new EventEmitter();

  BuyButtonClicked(pizza: Pizza){
    this.buy.emit()
  }

  
  FavouriteButtonClicked(pizza: Pizza){
    this.favourite.emit()
  }

  RemoveFavouriteButtonClicked(pizza:Pizza){
    this.nonfavourite.emit(pizza)
  }

}
