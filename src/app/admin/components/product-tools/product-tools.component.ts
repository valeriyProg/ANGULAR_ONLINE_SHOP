import {Component, OnDestroy, OnInit} from '@angular/core';
import ProductContract from "../../../modules/product/common/contracts/product.contract";
import {BrandService} from "../../../modules/brand/common/services/brand.service";
import {ProductEditService} from "../../../modules/product/common/services/product-edit.service";
import ProductFullModel from "../../../modules/product/common/models/product-full.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-tools',
  templateUrl: './product-tools.component.html',
  styleUrls: ['./product-tools.component.scss']
})
export class ProductToolsComponent implements OnInit, OnDestroy {
  loadedData: ProductFullModel;
  private subscriptions: Subscription[] = [];

  constructor(private productService: ProductContract,
              private brandService: BrandService,
              private productEditService: ProductEditService) { }

  ngOnInit() {
    let subs = this.productEditService.selectedProduct.subscribe(data=> {
      if (data) {
        this.initElement(data);
      }
    });
    this.subscriptions.push(subs);
  }

  initElement(id:string) {
    this.productService.get(id).subscribe(data=> {
      this.loadedData = data;
    });
  }

  edited() {
  //  TODO: NOT REALIZED YET...
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => {
      item.unsubscribe();
    });
  }
}
