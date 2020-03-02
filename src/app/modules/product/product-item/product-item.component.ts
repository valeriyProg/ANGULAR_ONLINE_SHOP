import {Component, Input, OnInit} from '@angular/core';
import {Promo} from "../common/enums/promo.enum";
import ProductLoadedModel from "../common/models/product-loaded.model";
import ProductFullModel from "../common/models/product-full.model";
import {SizeModeEnum} from "../common/enums/size-mode.enum";
import {CartService} from "../../cart/common/services/cart.service";
import {ProductSizeEnum} from "../common/enums/product-size.enum";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements  OnInit{
  @Input() product: ProductFullModel | ProductLoadedModel;
  @Input() size: SizeModeEnum = 0;
  sizeMode = SizeModeEnum;
  promoEnum = Promo;
  private loaded;
  isModalHide = true;
  packSize = ProductSizeEnum;
  selectedPack : number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    //SIMULATE DELAY FOR DISPLAY SPINNER
    setTimeout( ()=> {
      this.loaded = true;
    }, 440);
  }
}
