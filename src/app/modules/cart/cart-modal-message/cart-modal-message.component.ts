import {Component, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../common/services/cart.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-cart-modal-message',
  templateUrl: './cart-modal-message.component.html',
  styleUrls: ['./cart-modal-message.component.scss']
})
export class CartModalMessageComponent implements OnInit, OnDestroy {
  fade = false;
  display: boolean = false;
  private subscriptions: Subscription[] = [];

  constructor(private cartService: CartService) {  }

  ngOnInit() {
    let changeSubs = this.cartService.onChangeCartItems.subscribe(value => {
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

    this.subscriptions.push(changeSubs);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    })
  }
}
