import { Injectable } from '@angular/core';
import RestApiAbstract from "../../../../common/services/rest-api.abstract";
import BannerModel from "../models/banner.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BannerService extends RestApiAbstract<BannerModel>{
  protected readonly path = 'banner';
  constructor(protected readonly http: HttpClient) {
    super();
  }
}
