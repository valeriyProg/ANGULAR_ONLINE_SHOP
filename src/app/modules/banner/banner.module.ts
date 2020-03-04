import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerItemComponent } from './banner-item/banner-item.component';
import {BannerService} from "./common/services/banner.service";
import { BannerListComponent } from './banner-list/banner-list.component';
import {SpinnerModule} from "../../ui/spinner/spinner.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [BannerItemComponent, BannerListComponent],
  imports: [
    CommonModule,
    SpinnerModule,
    RouterModule
  ],
  providers: [
    BannerService
  ],
  exports: [
    BannerItemComponent,
    BannerListComponent
  ]
})
export class BannerModule { }
