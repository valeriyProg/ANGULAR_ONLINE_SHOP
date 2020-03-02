import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductProvider} from "./common/providers/product.provider";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';
import {NgxSpinnerModule} from "ngx-spinner";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {ScreenUploaderModule} from "../screen-uploader/screen-uploader.module";
import {ReactiveFormsModule} from "@angular/forms";
import {ProductEditService} from "./common/services/product-edit.service";
import {ImageModule} from "../image/image.module";
import {FormDataModule} from "../form-data/form-data.module";
import {MatDividerModule} from "@angular/material/divider";
import { ProductListTableComponent } from './product-list-table/product-list-table.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ButtonsModule} from "../../ui/buttons/buttons.module";
import {MatSortModule} from "@angular/material/sort";
import { ProductPricePipe } from './common/pipes/product-price.pipe';
import {RoadNavModule} from "../../core/road-nav/road-nav.module";
import {ImageListModule} from "../../ui/image-list/image-list.module";
import { ProductDetailDescriptionComponent } from './product-detail-description/product-detail-description.component';
import {RouterModule} from "@angular/router";
import {ContentDescriptionService} from "./common/services/content-description.service";
import {SpinnerModule} from "../../ui/spinner/spinner.module";
import {LocalstorageService} from "./common/services/localstorage.service";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductListTableComponent,
    ProductPricePipe,
    ProductDetailDescriptionComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    ScreenUploaderModule,
    ReactiveFormsModule,
    ImageModule,
    FormDataModule,
    MatDividerModule,
    MatTableModule,
    MatPaginatorModule,
    ButtonsModule,
    MatSortModule,
    RoadNavModule,
    ImageListModule,
    RouterModule,
    SpinnerModule,
    MatRadioModule
  ],
  providers: [
    ProductProvider,
    ProductEditService,
    ContentDescriptionService,
    LocalstorageService
  ],
  exports: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductAddComponent,
    ProductListTableComponent,
    ProductPricePipe
  ]
})
export class ProductModule { }
