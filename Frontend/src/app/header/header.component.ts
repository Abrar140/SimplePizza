import { Component } from '@angular/core';
import{ROUTER_TOKEN} from '../models/routing.model'
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // imports: [RouterLink]
})
export class HeaderComponent {
  readonly ROUTER_TOKENS=ROUTER_TOKEN;
  

}
