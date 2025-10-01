import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { CartComponent } from './cart/cart.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { ROUTER_TOKEN } from './models/routing.model';
import { NotFoundComponent } from './not-found/not-found.component';
import { ReviewComponent } from './review/review.component';
import { AllProductComponent } from './all-product/all-product.component';

const routes: Routes = [
  { path: `${ROUTER_TOKEN.HOME}/:category`, component: HomeComponent },
  // {
  //   // path: ROUTER_TOKEN.FAVOURITE,
  //   //  component:UpdatedFavouriteComponent
  //   canMatch: [
  //     () => {
  //       // const featureService= inject(featureService);
  //       // return featureService.featureFlags.pipe(map((flags)=>!!flags.favourite))
  //     },
  //   ],
  // },
  { path: ROUTER_TOKEN.FAVOURITE, component: FavouriteComponent },

  // {path:ROUTER_TOKEN.CART, component:CartComponent},
  {
    path: ROUTER_TOKEN.CART,
    component: CartComponent,
    // canActivate: [CartAuthGuard],
  },

  { path: ROUTER_TOKEN.FEEDBACK, component: FeedbackFormComponent },
  {path:ROUTER_TOKEN.REVIEW , component: ReviewComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path : ROUTER_TOKEN.NOTFOUND, component:NotFoundComponent},
    {path: 'allProduct', component: AllProductComponent},

  { path: '**', redirectTo: 'notfound' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
      bindToComponentInputs: true, // 👈 this is the magic
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
