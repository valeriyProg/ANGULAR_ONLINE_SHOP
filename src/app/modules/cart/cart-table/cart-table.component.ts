import { Component, OnInit } from '@angular/core';
import {CartService} from "../common/services/cart.service";
import {ProductSizeEnum} from "../../product/common/enums/product-size.enum";

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.scss']
})
export class CartTableComponent implements OnInit {
  sizeMode = ProductSizeEnum;

  constructor(private cartService: CartService) {}

  ngOnInit() {
  }

  setCount(input: HTMLInputElement, i: number) {
    const value = parseInt(input.value);
    this.cartService.setCount(value, i);
    input.value = (this.cartService.storedItems[i].count).toString();
  }
}
