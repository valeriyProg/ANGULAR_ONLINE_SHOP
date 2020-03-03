import {Component, OnInit} from '@angular/core';
import {CartService} from "../common/services/cart.service";
import ProductContract from "../../product/common/contracts/product.contract";
import {ProductSizeEnum} from "../../product/common/enums/product-size.enum";
import CouponModel from "../common/models/coupon.model";

@Component({
  selector: 'app-big-cart',
  templateUrl: './big-cart.component.html',
  styleUrls: ['./big-cart.component.scss']
})
export class BigCartComponent implements OnInit {
  sizeMode = ProductSizeEnum;
  appliedCoupon: CouponModel;

  constructor(private cartService: CartService,
              private productService: ProductContract) { }

  ngOnInit() { }

}
