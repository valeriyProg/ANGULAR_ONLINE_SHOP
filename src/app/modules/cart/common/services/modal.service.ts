import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import CartActionModel from "../models/cart-action.model";

@Injectable()
export class ModalService {
  onCartAction: BehaviorSubject<CartActionModel> = new BehaviorSubject<CartActionModel>(null);
}
