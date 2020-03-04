import ProductModel from "../models/product.model";
import {Observable} from "rxjs";
import ProductFullModel from "../models/product-full.model";

export default abstract class ProductContract {
  abstract products: ProductModel[];
  abstract get(id:string): Observable<ProductFullModel>;
  abstract getList(query?:{}): Observable<ProductFullModel[]>;
  abstract add(data: FormData): Observable<ProductModel>;
  abstract update(id: string, data: FormData): Observable<ProductFullModel>;
  abstract delete(id: string): Observable<void>;
}
