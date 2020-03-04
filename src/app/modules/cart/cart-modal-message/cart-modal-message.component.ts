import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../common/services/cart.service";
import {Subscription} from "rxjs";
import {ModalService} from "../common/services/modal.service";
import CartActionModel from "../common/models/cart-action.model";
import {CartActionsEnum} from "../common/enums/cart-actions.enum";

@Component({
  selector: 'app-cart-modal-message',
  templateUrl: './cart-modal-message.component.html',
  styleUrls: ['./cart-modal-message.component.scss']
})
export class CartModalMessageComponent implements OnInit, OnDestroy {
  @Input()
  fade = false;
  display: boolean = false;
  action: CartActionModel;
  cartActionsEnum = CartActionsEnum;
  private subscriptions: Subscription[] = [];

  constructor(private cartService: CartService,
              private modalService: ModalService) {  }

  ngOnInit() {
    let cartAction = this.modalService.onCartAction.subscribe(value => {
      if (value !== null) {
        this.action = value;
        this.showModal();
      }
    });
    this.subscriptions.push(cartAction);
  }

  private showModal() {
    this.display = true;
    this.fade = true;
    setTimeout(() => {
      this.fade = false;
    }, 2000);
    setTimeout(() => {
      this.display = false;
    }, 3000);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    })
  }
}
