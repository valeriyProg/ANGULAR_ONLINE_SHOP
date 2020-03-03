import {Component, OnInit} from '@angular/core';
import {CartService} from "../common/services/cart.service";
import ProductContract from "../../product/common/contracts/product.contract";
import {ProductSizeEnum} from "../../product/common/enums/product-size.enum";
import {LocalstorageService} from "../../product/common/services/localstorage.service";

@Component({
  selector: 'app-big-cart',
  templateUrl: './big-cart.component.html',
  styleUrls: ['./big-cart.component.scss']
})
export class BigCartComponent implements OnInit {
  sizeMode = ProductSizeEnum;

  constructor(private cartService: CartService,
              private productService: ProductContract,
              private localstorageService: LocalstorageService) { }

  ngOnInit() { }

  setCount(input: HTMLInputElement, i: number) {
    const value = parseInt(input.value);
    this.cartService.setCount(value, i);
    input.value = (this.cartService.storedItems[i].count).toString();
  }
}
