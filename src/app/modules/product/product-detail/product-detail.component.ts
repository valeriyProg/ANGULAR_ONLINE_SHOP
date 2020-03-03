import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import ProductContract from "../common/contracts/product.contract";
import {Observable} from "rxjs";
import ProductFullModel from "../common/models/product-full.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CartService} from "../../cart/common/services/cart.service";
import {ProductSizeEnum} from "../common/enums/product-size.enum";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{
  productId: string;
  product: Observable<ProductFullModel>;
  addToCartForm: FormGroup;
  packSize = ProductSizeEnum;
  selectedPackSize: number;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductContract,
              private cartService: CartService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(value => {
      this.productId = value.get('id');
      this.product = this.productService.get(this.productId);
    });

    const storedProduct = this.cartService.getStoredItem(this.productId);

    this.addToCartForm = this.fb.group({
      quantity: storedProduct ? storedProduct.count : 1
    });

    this.selectedPackSize = storedProduct ? storedProduct.size : 0
  }

  get quantity():number {
    return this.addToCartForm.value['quantity'];
  }

  increase () {
    this.addToCartForm.patchValue({
      quantity: this.quantity + 1
    });
  }

  decrease() {
    this.addToCartForm.patchValue({
      quantity: (this.quantity - 1) ? this.quantity - 1 : 1
    });
  }
}
