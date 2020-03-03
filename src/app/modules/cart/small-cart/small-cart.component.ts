import {Component, EventEmitter, Output} from '@angular/core';
import {CartService} from "../common/services/cart.service";
import ProductContract from "../../product/common/contracts/product.contract";

@Component({
  selector: 'app-small-cart',
  templateUrl: './small-cart.component.html',
  styleUrls: ['./small-cart.component.scss']
})
export class SmallCartComponent {
  @Output() navigated: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private cartService: CartService,
              private productService: ProductContract) { }

}
