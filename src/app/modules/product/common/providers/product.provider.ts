import ProductContract from "../contracts/product.contract";
import {ApiService} from "../services/api.service";

export const ProductProvider = {
  provide: ProductContract,
  useClass: ApiService
};
