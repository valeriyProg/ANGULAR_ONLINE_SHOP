import { Injectable } from '@angular/core';
import CouponModel from "../models/coupon.model";
import CouponStatusMessageModel from "../models/coupon-status-message.model";
import {LocalstorageService} from "../../../product/common/services/localstorage.service";

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
  userCoupons: CouponModel[] = [];

  constructor(private localstorageService: LocalstorageService) {
      this.userCoupons = this.getStoredCoupons() || [];
  }

  setCoupon(id: string): CouponStatusMessageModel {
    if (this.isCouponExist(id) && this.isCouponAlreadyApplied(id)) {
      return {
        status: false,
        message: 'Coupon already exist'
      };
    }

    if (!this.isCouponExist(id)) {
      return {
        status: false,
        message: 'Invalid coupon!'
      };
    }

    let index = this.coupons.findIndex(value => value.id === id);
    this.userCoupons.push(this.coupons[index]);
    this.localstorageService.set('coupons', this.userCoupons);

    return {
      status: true,
      message: 'Coupon successful apply'
    };
  }

  clearCoupon() {
    this.userCoupons = [];
    this.localstorageService.set('coupons', []);


  }

  getStoredCoupons(): CouponModel[] {
    return JSON.parse(this.localstorageService.get('coupons'));
  }

  isCouponExist(id: string): boolean {
    let index = this.coupons.findIndex(value => value.id === id);
    return index >= 0;
  }

  isCouponAlreadyApplied(id: string):  boolean {
    let index = this.userCoupons.findIndex(value => value.id === id);
    return index >= 0;
  }
}
