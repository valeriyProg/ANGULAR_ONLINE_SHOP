import {Injectable} from '@angular/core';
import {LocalstorageService} from "../../../product/common/services/localstorage.service";
import LocalstorageCartModel from "../../../product/common/models/localstorage-cart.model";
import {BehaviorSubject, fromEvent} from "rxjs";
import ProductFullModel from "../../../product/common/models/product-full.model";
import ProductContract from "../../../product/common/contracts/product.contract";
import CouponModel from "../models/coupon.model";
import CouponStatusMessageModel from "../models/coupon-status-message.model";
import {ModalService} from "./modal.service";
import {CartActionsEnum} from "../enums/cart-actions.enum";
import {CouponService} from "./coupon.service";

@Injectable()
export class CartService {
  key = 'cart';
  storedItems: LocalstorageCartModel[];
  onChangeCartItems: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadedProducts: ProductFullModel[];
  ecoTaxValue = 0.02;
  vatValue = 0.2;
  coupons: CouponModel[];
  private productsPrice = 0;

  constructor(private localstorageService: LocalstorageService,
              private productService: ProductContract,
              private modalService: ModalService,
              private couponService: CouponService) {

    this.storedItems = this.getItems() || [];
    this.loadProducts();
    this.coupons = this.couponService.userCoupons;

    fromEvent(window, 'storage').subscribe(event =>{
      this.storedItems = this.getItems();
      this.loadProducts();
      this.onChangeCartItems.next(true);
    });
  }

  addItem(id: string, size: number | string, count?: number) {
    const index = this.storedItems.findIndex(item => item.id === id);

    if (index != -1 && this.storedItems[index].size === size) {
      this.updateItem(index, size, count);
      return;
    }

    let item = {
      id: id,
      count: count ? count : 1,
      size: +(size)
    };

    this.storedItems.push(item);
    this.localstorageService.set(this.key, this.storedItems);
    this.loadProducts();
    this.onChangeCartItems.next(true);
    this.modalService.onCartAction.next({ name: id, action: CartActionsEnum.ADD});
  }

  setCount(value: number, index: number) {
    if (value <= 0) {
      this.storedItems[index].count = 1;
      this.modalService.onCartAction.next({ name: this.storedItems[index].id, action: CartActionsEnum.UPDATE});
      this.localstorageService.set(this.key, this.storedItems);
      return;
    }
    this.storedItems[index].count = value;
    this.localstorageService.set(this.key, this.storedItems);
    this.modalService.onCartAction.next({ name: this.storedItems[index].id, action: CartActionsEnum.UPDATE});
  }

  getStoredItem(id:string): LocalstorageCartModel {
    const index = this.storedItems.findIndex(item=> item.id === id);
    return this.storedItems[index];
  }

  private getItems(): LocalstorageCartModel[] {
    return JSON.parse(this.localstorageService.get(this.key));
  }

  loadProducts(): void {
    this.loadedProducts = [];
    this.storedItems.forEach(value => {
      this.productService.get(value.id).subscribe(item => {
        this.loadedProducts.push(item);
      });
    });
  }

  updateItem(index: number, size: number | string, count?: number) {
    this.storedItems[index].count = count ? count : this.storedItems[index].count + 1;
    this.storedItems[index].size = +size;
    this.modalService.onCartAction.next({ name: this.storedItems[index].id, action: CartActionsEnum.UPDATE});
    this.localstorageService.set(this.key, this.storedItems);
    this.loadProducts();
    this.onChangeCartItems.next(true);
  }

  deleteItem(id: string) {
    const index = this.storedItems.findIndex(item => item.id === id);
    this.storedItems.splice(index, 1);
    this.loadProducts();
    this.localstorageService.set(this.key, this.storedItems);
    this.onChangeCartItems.next(true);
    this.modalService.onCartAction.next({ name: id, action: CartActionsEnum.REMOVE});
  }

  get itemsCount(): number {
    let count = 0;
    this.storedItems.forEach( item => {
      count += item.count;
    });
    return count;
  }
}
