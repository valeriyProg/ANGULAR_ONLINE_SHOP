import {CartActionsEnum} from "../enums/cart-actions.enum";

export default interface CartActionModel {
  name: string;
  action: CartActionsEnum
}
