import { Injectable } from '@angular/core';
import {CartService} from "./cart.service";
import {CouponService} from "./coupon.service";

@Injectable()
export class CalculationService {

  constructor(private cartService: CartService, private couponService: CouponService) { }

  get priceWithoutCalculating(): number {
    let price = 0;
    this.cartService.loadedProducts.forEach((value, index) => {
      price += value.price * this.cartService.storedItems[index].count;
    });
    return price;
  }

  get calculatedEcoTax() : number {
    return this.priceWithoutCalculating * this.cartService.ecoTaxValue;
  }

  get calculatedVat(): number {
    return this.priceWithoutCalculating * this.cartService.vatValue;
  }

  get calculatedFullPrice(): number {
    if (this.couponService.userCoupons.length) {
      let price = this.priceWithoutCalculating;
      this.couponService.userCoupons.forEach(value => {
        price = price - (value.discount * price);
      });
      return  price + this.calculatedVat + this.calculatedEcoTax;
    }
    return this.priceWithoutCalculating + this.calculatedVat + this.calculatedEcoTax;
  }
}
