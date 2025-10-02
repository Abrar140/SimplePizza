import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pizza } from './pizza.model';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  private apiUrl = 'https://localhost:7093/api/pizza';

  constructor(private http: HttpClient) {}
  getPizzas(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPizza(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  addPizza(pizza: any): Observable<any> {
    return this.http.post(this.apiUrl, pizza);
  }

  updatePizza(id: number, pizza: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pizza);
  }

  deletePizza(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // getPizza(): Observable<Pizza[]>{
  //   return this.http.get<Pizza[]>('api/pizza')
  // }
}
