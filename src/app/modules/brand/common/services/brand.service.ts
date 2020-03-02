import { Injectable } from '@angular/core';
import RestApiAbstract from "../../../../common/services/rest-api.abstract";
import BrandModel from "../models/brand.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BrandService extends RestApiAbstract<BrandModel> {
  protected readonly path: string = 'brands';

  constructor(protected readonly http: HttpClient) {
    super();
  }
}
