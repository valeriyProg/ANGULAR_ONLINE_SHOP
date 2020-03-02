import ProductModel from "./product.model";
import BrandModel from "../../../brand/common/models/brand.model";
import {Observable} from "rxjs";
import ChocolateTypeModels from "../../../chocolate-type/common/models/chocolate-type.models";
import PackTypeModel from "../../../pack-type/common/models/pack-type.model";
import LinkModel from "../../../../common/models/link.model";
import PromoModel from "../../../promo/common/models/promo.model";
import ContentDescriptionModel from "./content-description.model";

export default interface ProductFullModel {
  id: string;
  chocolateType: Observable<ChocolateTypeModels>;
  packType: Observable<PackTypeModel>;
  name: LinkModel;
  brand: Observable<BrandModel>;
  price: number;
  old_price?: number | null;
  weight: number;
  screen:string;
  screen_big?: string;
  screen_list?: string[];
  description?: string;
  promo?: Observable<PromoModel>;
  content?: Observable<ContentDescriptionModel>;
}
