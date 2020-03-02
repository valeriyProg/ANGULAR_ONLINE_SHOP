import { Injectable } from '@angular/core';
import RestApiAbstract from "../../../../common/services/rest-api.abstract";
import PromoModel from "../models/promo.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PromoService extends RestApiAbstract<PromoModel>{
  protected readonly path: string = 'promo';

  constructor(protected readonly http: HttpClient) {
    super();
  }

}
