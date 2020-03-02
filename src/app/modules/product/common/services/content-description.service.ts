import { Injectable } from '@angular/core';
import RestApiAbstract from "../../../../common/services/rest-api.abstract";
import ContentDescriptionModel from "../models/content-description.model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ContentDescriptionService extends RestApiAbstract<ContentDescriptionModel>{
  protected readonly path: string = 'content-description';
  constructor(protected readonly http: HttpClient) {
    super();
  }
  reviews: number ;
}
