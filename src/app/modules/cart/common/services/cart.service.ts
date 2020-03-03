import { Injectable } from '@angular/core';
import {LocalstorageService} from "../../../product/common/services/localstorage.service";
import LocalstorageCartModel from "../../../product/common/models/localstorage-cart.model";
import {BehaviorSubject, fromEvent} from "rxjs";
import ProductFullModel from "../../../product/common/models/product-full.model";
import ProductContract from "../../../product/common/contracts/product.contract";
import CouponModel from "../models/coupon.model";
import CouponStatusMessageModel from "../models/coupon-status-message.model";

@Injectable()
export class CartService {
  key = 'cart';
  storedItems: LocalstorageCartModel[];
  changeCartItems: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadedProducts: ProductFullModel[];
  ecoTaxValue = 0.02;
  vatValue = 0.2;
  coupons: CouponModel[] = [];
  private productsPrice = 0;

  constructor(private localstorageService: LocalstorageService,
              private productService: ProductContract) {
    this.storedItems = this.getItems() || [];
    this.loadProducts();

    fromEvent(window, 'storage').subscribe(event =>{
      this.storedItems = this.getItems();
      this.loadProducts();
      this.changeCartItems.next(true);
    });
  }

  addItem(id: string, size: number | string, count?: number) {
    const index = this.storedItems.findIndex(item => item.id === id);
    if (index != -1) {
      this.storedItems[index].count = count;
      this.storedItems[index].size = +size;
    } else {
      let item = {
        id: id,
        count: count ? count : 1,
        size: +(size)
      };
      this.storedItems.push(item);
    }

    this.localstorageService.set(this.key, this.storedItems);
    this.loadProducts();
    this.changeCartItems.next(true);
  }

  getStoredItem(id:string): LocalstorageCartModel {
    const index = this.storedItems.findIndex(item=> item.id === id);
    return this.storedItems[index];
  }

  private getItems(): LocalstorageCartModel[] {
    return JSON.parse(this.localstorageService.get(this.key));
  }

  addCoupon(coupon: CouponModel): CouponStatusMessageModel {
    const index = this.coupons.findIndex(value => value.id === coupon.id);

    if (index != -1) {
      return {
        status: false,
        message: 'Coupon already exist'
      };
    }

    this.coupons.push(coupon);
    return {
      status: true,
      message: 'Coupon successful apply'
    };
  }

  loadProducts(): void {
    this.loadedProducts = [];
    this.storedItems.forEach(value => {
      this.productService.get(value.id).subscribe(item => {
        this.loadedProducts.push(item);
      });
    });
  }

  deleteItem(id: string) {
    const index = this.storedItems.findIndex(item => item.id === id);
    this.storedItems.splice(index, 1);
    this.loadProducts();
    this.localstorageService.set(this.key, this.storedItems);
    this.changeCartItems.next(true);
  }

  get priceWithoutCalculating(): number {
    let price = 0;
    this.loadedProducts.forEach((value, index) => {
      price += value.price * this.storedItems[index].count;
    });
    return price;
  }

  get calculatedEcoTax() : number {
    return this.priceWithoutCalculating * this.ecoTaxValue;
  }

  get calculatedVat(): number {
    return this.priceWithoutCalculating * this.vatValue;
  }

  get calculatedFullPrice(): number {
    if (this.coupons.length) {
      let price = this.priceWithoutCalculating;
      this.coupons.forEach(value => {
        price = price - (value.discount * price);
      });
      return  price + this.calculatedVat + this.calculatedEcoTax;
    }
    return this.priceWithoutCalculating + this.calculatedVat + this.calculatedEcoTax;
  }

  get itemsCount(): number {
    let length = 0;
    this.storedItems.forEach( item => {
      length += item.count;
    });
    return length;
  }
}
