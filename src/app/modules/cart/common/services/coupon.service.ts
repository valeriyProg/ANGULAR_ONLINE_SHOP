import { Injectable } from '@angular/core';
import CouponModel from "../models/coupon.model";
import {CartService} from "./cart.service";
import CouponStatusMessageModel from "../models/coupon-status-message.model";

@Injectable( )
export class CouponService {
  coupons: CouponModel[] = [{
    id: '000000',
    discount: 0.05
  }, {
    id: '111111',
    discount: 0.08
  }, {
    id: '999-999',
    discount: 0.15
  },  {
    id: '555-555',
    discount: 0.25
  }];

  constructor(private cartService: CartService) { }

  setCoupon(id: string): CouponStatusMessageModel {
    const couponExist = this.coupons.filter(value => value.id === id )[0];
    if (!couponExist) {
      return {
        status: false,
        message: 'Invalid coupon!'
      };
    }
    return this.cartService.addCoupon(couponExist);
  }
}
