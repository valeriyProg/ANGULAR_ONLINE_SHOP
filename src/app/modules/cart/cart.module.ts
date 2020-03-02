import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallCartComponent } from './small-cart/small-cart.component';
import {CartService} from "./common/services/cart.service";
import {ImageModule} from "../image/image.module";
import {ButtonsModule} from "../../ui/buttons/buttons.module";
import {RouterModule} from "@angular/router";
import {ProductModule} from "../product/product.module";
import { BigCartComponent } from './big-cart/big-cart.component';
import {MatDividerModule} from "@angular/material/divider";
import { CartAccordionComponent } from './cart-accordion/cart-accordion.component';
import { AddToCartModalComponent } from './add-to-cart-modal/add-to-cart-modal.component';
import { CartModalMessageComponent } from './cart-modal-message/cart-modal-message.component';
import {SpinnerModule} from "../../ui/spinner/spinner.module";

@NgModule({
  declarations: [
    SmallCartComponent,
    BigCartComponent,
    CartAccordionComponent,
    AddToCartModalComponent,
    CartModalMessageComponent
  ],
  imports: [
    CommonModule,
    ImageModule,
    ButtonsModule,
    RouterModule,
    ProductModule,
    MatDividerModule,
    SpinnerModule
  ],
  providers: [
    CartService
  ],
  exports: [
    SmallCartComponent,
    BigCartComponent,
    CartModalMessageComponent
  ]
})
export class CartModule { }
