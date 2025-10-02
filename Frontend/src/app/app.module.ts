import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CartComponent } from './cart/cart.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PizzaDetailComponent } from './pizza-detail/pizza-detail.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FormsModule } from '@angular/forms';
import { RestrictedWords } from './validation/restricted-words.validator';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AllProductComponent } from './all-product/all-product.component';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
        FormsModule,
        RouterOutlet,
        RouterLink,
            MatDialogModule,
    MatSnackBarModule,
            HttpClientModule,
//standalone

    //             AppComponent,
    // HomeComponent,
    // FavouriteComponent,
    // CartComponent,
    // HeaderComponent,
    // PizzaDetailComponent,
    // FeedbackFormComponent,
    // RestrictedWords

    AllProductComponent

        

  ],
  providers: [],
  // bootstrap: [AppComponent]
})
export class AppModule { }



