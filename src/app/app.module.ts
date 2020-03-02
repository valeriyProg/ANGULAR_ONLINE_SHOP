import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderModule} from "./core/header/header.module";
import {FooterModule} from "./core/footer/footer.module";
import {ErrorsModule} from "./core/errors/errors.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ClientModule} from "./client/client.module";
import {AdminModule} from "./admin/admin.module";
import {ProductModule} from "./modules/product/product.module";
import {BrandService} from "./modules/brand/common/services/brand.service";
import {ChocolateTypeService} from "./modules/chocolate-type/common/services/chocolate-type.service";
import {PackTypeService} from "./modules/pack-type/common/services/pack-type.service";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ErrorsModule,
    HeaderModule,
    ClientModule,
    FooterModule,
    ProductModule,
    AdminModule,
    AppRoutingModule,
  ],
  providers: [
    BrandService,
    ChocolateTypeService,
    PackTypeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
