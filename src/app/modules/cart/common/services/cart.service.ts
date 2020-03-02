import { Injectable } from '@angular/core';
import {LocalstorageService} from "../../../product/common/services/localstorage.service";
import LocalstorageCartModel from "../../../product/common/models/localstorage-cart.model";
import {BehaviorSubject, fromEvent} from "rxjs";
import ProductFullModel from "../../../product/common/models/product-full.model";
import ProductContract from "../../../product/common/contracts/product.contract";

@Injectable()
export class CartService {
  key = 'cart';
  storedItems: LocalstorageCartModel[];
  changeCartItems: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loadedProducts: ProductFullModel[];
  private productsPrice = 0;
  ecoTaxValue = 0.02;
  vatValue = 0.2;

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
    let item = {
      id: id,
      count: count ? count : 1,
      size: +(size)
    };
    this.storedItems.push(item);
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
    return this.priceWithoutCalculating + this.calculatedVat + this.calculatedEcoTax;
  }

  get itemsCount(): number {
    let length = 0;
    this.storedItems.forEach( item => {
      length += item.count;
    });
    return length;
  }

  loadProducts(): void {
    this.loadedProducts = [];
    this.storedItems.forEach(value => {
      this.productService.get(value.id).subscribe(item => {
        this.loadedProducts.push(item);
      });
    });
  }
}
