import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CouponService} from "../common/services/coupon.service";
import CouponModel from "../common/models/coupon.model";

@Component({
  selector: 'app-coupon-panel-item',
  templateUrl: './coupon-panel-item.component.html',
  styleUrls: ['./coupon-panel-item.component.scss']
})
export class CouponPanelItemComponent {
  @Input() expanded: boolean = false;
  @Output() applied: EventEmitter<CouponModel> = new EventEmitter<CouponModel>();
  validMessage: string;
  confirmed: boolean;
  validateDisplay: boolean = false;

  constructor(private couponService: CouponService) { }

  apply(e: Event, id: string) {
    e.preventDefault();
    let status = this.couponService.setCoupon(id);

    if (status.status === false) {
      this.confirmed = false;
      this.showValidateMessage(status.message);
      return;
    }

    this.confirmed = true;
    this.showValidateMessage(status.message);
  }

  showValidateMessage(message: string) {
    this.validMessage = message;
    this.validateDisplay = true;
    setTimeout(() => {
      this.validateDisplay = false;
    }, 3000);
  }
}
