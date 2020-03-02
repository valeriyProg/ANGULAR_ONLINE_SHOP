import { Component, OnInit } from '@angular/core';
import {BannerService} from "../common/services/banner.service";
import BannerModel from "../common/models/banner.model";

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent implements OnInit {
  bannerList: BannerModel[];

  constructor(private bannerService: BannerService) { }

  ngOnInit() {
    this.bannerService.list().subscribe(data=>{
      this.bannerList = data;
    });
  }
}
