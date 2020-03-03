import {Component, Input, OnInit} from '@angular/core';
import ProductContract from "../common/contracts/product.contract";
import {Observable} from "rxjs";
import ProductFullModel from "../common/models/product-full.model";
import {PromoService} from "../../promo/common/services/promo.service";
import PromoModel from "../../promo/common/models/promo.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input() type: { [key: string]: string;};
  @Input() count: number = 8;
  params: { [key: string]: string; } = { count: this.count.toString()};
  list: Observable<ProductFullModel[]>;
  promo: Observable<PromoModel[]>;
  activeLinkPos: number;

  constructor(private productService: ProductContract, private promoService: PromoService) { }

  ngOnInit() {
    this.params = Object.assign(this.params, this.type);
    this.list = this.productService.getList(this.params);
    this.promo = this.promoService.list();
  }

  loadProducts(e: Event, filter?: string) {
    e.preventDefault();
    if (filter) {
      let promoParam = { promo_id: filter};
      promoParam = Object.assign(promoParam, this.params);
      return this.list = this.productService.getList(promoParam);
    }
    this.list = this.productService.getList(this.params);
  }
}
