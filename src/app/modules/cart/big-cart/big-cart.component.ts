import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CartService} from "../common/services/cart.service";
import ProductContract from "../../product/common/contracts/product.contract";
import {ProductSizeEnum} from "../../product/common/enums/product-size.enum";
import ProductFullModel from "../../product/common/models/product-full.model";
import {Observable} from "rxjs";

@Component({
  selector: 'app-big-cart',
  templateUrl: './big-cart.component.html',
  styleUrls: ['./big-cart.component.scss']
})
export class BigCartComponent implements OnInit {
  sizeMode = ProductSizeEnum;

  accordionDisplayState = [false, true];
  constructor(private cartService: CartService,
              private productService: ProductContract) { }

  ngOnInit() { }

  toggleAccordion(e: Event, index: number){
    e.preventDefault();
    this.accordionDisplayState[index] = !this.accordionDisplayState[index];
  }
}
