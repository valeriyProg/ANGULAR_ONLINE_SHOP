import { Injectable } from '@angular/core';
import ProductContract from "../contracts/product.contract";
import ProductModel from "../models/product.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {map, tap} from "rxjs/operators";
import {BrandService} from "../../../brand/common/services/brand.service";
import ProductFullModel from "../models/product-full.model";
import {ChocolateTypeService} from "../../../chocolate-type/common/services/chocolate-type.service";
import {PackTypeService} from "../../../pack-type/common/services/pack-type.service";
import {PromoService} from "../../../promo/common/services/promo.service";
import {ContentDescriptionService} from "./content-description.service";

@Injectable()
export class ApiService extends ProductContract{
  products: ProductModel[];

  readonly url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient,
              private brandCategory: BrandService,
              private promoService: PromoService,
              private chocolateTypeService: ChocolateTypeService,
              private packTypeService: PackTypeService,
              private contentDescriptionService: ContentDescriptionService) {
    super();
  }

  get(id: string): Observable<ProductFullModel> {
    return this.http.get<ProductModel>(`${this.url}products/${id}`)
      .pipe(
        map(this.mapProduct),
      );
  }

  private mapProduct: (product:ProductModel) => ProductFullModel = (product) => {
    const brand = this.brandCategory.get(product.brand_id);
    const promo = this.promoService.get(product.promo_id);
    const chocolateType = this.chocolateTypeService.get(product.chocolateType_id);
    const packType = this.packTypeService.get(product.packType_id);
    const contentDescription = this.contentDescriptionService.get(product.content_id);

    return {
      id: product.id,
      chocolateType,
      packType,
      name:  product.name,
      brand,
      old_price: product.old_price,
      price:  product.price,
      weight:  product.weight,
      screen:  product.screen,
      screen_big:  product.screen_big,
      screen_list: product.screen_list,
      description:  product.description,
      promo: promo,
      content: contentDescription,
    };
  };

  private mapProducts: (items: ProductModel[]) => ProductFullModel[] = (items) => {
    return items.map(this.mapProduct);
  };

  getList(query?: {[key:string]: string}): Observable<ProductFullModel[]> {
    return this.http.get<ProductModel[]>(`${this.url}products`, { params: query })
      .pipe(
        map(this.mapProducts),
      );
  }

  add(data: FormData): Observable<ProductModel> {
    return this.http.post<ProductModel>(`${this.url}products/add-product`, data);
  }

  update(id: string, data: FormData): Observable<ProductFullModel> {
    return this.http.post<ProductModel>(`${this.url}products/${id}`, data).pipe(
      map(this.mapProduct),
    );
  }

  delete(id: string): void {
    //TODO: TO REALIZED IN FUTURE
    throw new Error("Method not implemented.");
  }

}

