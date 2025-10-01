import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable({providedIn:'root'})


export class CartAuthGuard implements CanActivate{
    //inject authservice and router

    canActivate(){
        return true
        // add permsiion for it 
        // this.authService.userAuth.pipe(
        //     map((permissions)=>)               
        //)
    }
}