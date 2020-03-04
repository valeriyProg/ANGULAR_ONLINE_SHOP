import { Component } from '@angular/core';
import {CartService} from "../../../modules/cart/common/services/cart.service";

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent {
  constructor(private cartService: CartService) {}
}
