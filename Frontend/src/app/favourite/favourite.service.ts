import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Pizza } from '../home/pizza.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FavouriteService {
  private favourite: BehaviorSubject<Pizza[]> = new BehaviorSubject<Pizza[]>(
    []
  );

  constructor(private http: HttpClient) {}
  add(pizza: Pizza) {
    const newCart = [...this.favourite.getValue(), pizza];
    this.favourite.next(newCart);
    this.http.post('/api/favourite', newCart).subscribe(() => {
      console.log('Added');
    });
  }

  remove(pizza: Pizza) {
    const newCart = this.favourite
      .getValue()
      .filter((item) => item.id != pizza.id);
    this.favourite.next(newCart);
    this.http.post('/api/favourite', newCart).subscribe(() => {
      console.log('Removed');
    });
  }

  getFavourite(): Observable<Pizza[]> {
    return this.favourite;
  }
}
