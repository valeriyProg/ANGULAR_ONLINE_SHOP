import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class ProductEditService {
  selectedProduct: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null );
  constructor() { }
}
