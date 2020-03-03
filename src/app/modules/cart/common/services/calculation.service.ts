import { Injectable } from '@angular/core';
import {CartService} from "./cart.service";

@Injectable()
export class CalculationService {

  constructor(private cartService: CartService) { }

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
    if (this.cartService.coupons.length) {
      let price = this.priceWithoutCalculating;
      this.cartService.coupons.forEach(value => {
        price = price - (value.discount * price);
      });
      return  price + this.calculatedVat + this.calculatedEcoTax;
    }
    return this.priceWithoutCalculating + this.calculatedVat + this.calculatedEcoTax;
  }
}
