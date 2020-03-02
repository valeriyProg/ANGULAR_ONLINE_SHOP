import { Injectable } from '@angular/core';
import RestApiAbstract from "../../../../common/services/rest-api.abstract";
import CategoryDataModel from "../models/category-data.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class CategoryService extends RestApiAbstract<CategoryDataModel>{
  protected readonly path = 'category';

  constructor( protected readonly http: HttpClient) {
    super();
  }
}
