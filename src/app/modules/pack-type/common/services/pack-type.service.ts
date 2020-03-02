import { Injectable } from '@angular/core';
import RestApiAbstract from "../../../../common/services/rest-api.abstract";
import PackTypeModel from "../models/pack-type.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PackTypeService  extends  RestApiAbstract<PackTypeModel>{
  protected readonly path: string = 'pack-types';

  constructor(protected readonly http: HttpClient) {
    super();
  }
}
