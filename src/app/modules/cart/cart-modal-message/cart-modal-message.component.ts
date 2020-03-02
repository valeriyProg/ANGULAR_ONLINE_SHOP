import { Component, OnInit } from '@angular/core';
import {CartService} from "../common/services/cart.service";

@Component({
  selector: 'app-cart-modal-message',
  templateUrl: './cart-modal-message.component.html',
  styleUrls: ['./cart-modal-message.component.scss']
})
export class CartModalMessageComponent implements OnInit {
  fade = false;
  display: boolean = false;

  constructor(private cartService: CartService) {  }

  ngOnInit() {
    this.cartService.changeCartItems.subscribe(value => {
      if (value) {
        this.display = true;
        this.fade = true;
        setTimeout(() => {
          this.fade = false;
        }, 2000);
        setTimeout(() => {
          this.display = false;
        }, 3000);
      }
    });
  }
}
