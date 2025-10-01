import { Injectable } from '@angular/core';
import { Pizza } from '../home/pizza.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:BehaviorSubject<Pizza[]>=new BehaviorSubject<Pizza[]>([])

  constructor(private http: HttpClient) { }

  add(pizza:Pizza){


const currentCart=this.cart.getValue();

const existingPizza=currentCart.find(item=>item.id===pizza.id);

let newCart:Pizza[];
if (existingPizza){
  newCart=currentCart.map(item=>item.id===pizza.id?{...item, quantity:(item.quantity??1)+1}:item)
}else{
    newCart=[...currentCart, pizza]

}

 
    
    this.cart.next(newCart);
    this.http.post('/api/cart', newCart).subscribe(()=>{
      console.log("Added")
    })  

  }


 
  remove(pizza:Pizza){
    const newCart=this.cart.getValue().filter(item=>item.id !=pizza.id)
    this.cart.next(newCart);
      this.http.post('/api/cart', newCart).subscribe(()=>{
      console.log("Removed")
    }) 

  }

  getCart():Observable<Pizza[]>{
    return this.cart
  }
}
