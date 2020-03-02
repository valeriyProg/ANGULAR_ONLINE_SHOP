import {ProductSizeEnum} from "../enums/product-size.enum";

export default interface LocalstorageCartModel {
  id: string;
  count: number;
  size: ProductSizeEnum
}
