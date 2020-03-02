import {Component, Input} from '@angular/core';
import BannerModel from "../common/models/banner.model";
import {BannerTypeEnum} from "../common/enums/banner-type.enum";

@Component({
  selector: 'app-banner-item',
  templateUrl: './banner-item.component.html',
  styleUrls: ['./banner-item.component.scss']
})
export class BannerItemComponent {
  @Input() data: BannerModel;
  bannerTypeEnum = BannerTypeEnum;
}
