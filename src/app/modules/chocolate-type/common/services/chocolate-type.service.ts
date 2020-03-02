import { Injectable } from '@angular/core';
import RestApiAbstract from "../../../../common/services/rest-api.abstract";
import ChocolateTypeModels from "../models/chocolate-type.models";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ChocolateTypeService extends RestApiAbstract<ChocolateTypeModels>{
  protected readonly path: string = 'chocolate-types';

  constructor(protected readonly http: HttpClient) {
    super();
  }
}
