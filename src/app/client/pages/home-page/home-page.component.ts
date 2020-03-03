import {Component, OnInit} from '@angular/core';
import {BannerService} from "../../../modules/banner/common/services/banner.service";
import BannerModel from "../../../modules/banner/common/models/banner.model";
import {PackageTypeEnum} from "../../../modules/product/common/enums/package-type.enum";
import {ChocolateTypeEnum} from "../../../modules/product/common/enums/chocolate-type.enum";
import {BannerTypeEnum} from "../../../modules/banner/common/enums/banner-type.enum";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  dealBannerList: BannerModel[];
  newBannerList: BannerModel[];
  shopByBannerList: BannerModel[];
  packTypeEnum = PackageTypeEnum;
  chocolateTypeEnum = ChocolateTypeEnum;
  bannerTypeEnum = BannerTypeEnum;

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerService.list().subscribe(data=>{
      this.dealBannerList = data.filter((item)=> item.type == this.bannerTypeEnum.Deal);
      this.newBannerList = data.filter((item)=> item.type == this.bannerTypeEnum.New);
      this.shopByBannerList = data.filter((item)=> item.type == this.bannerTypeEnum.ShopBy);
    });
  }
}
