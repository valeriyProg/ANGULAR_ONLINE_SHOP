import ProductModel from "./product.model";
import BrandModel from "../../../brand/common/models/brand.model";
import PackTypeModel from "../../../pack-type/common/models/pack-type.model";
import ChocolateTypeModels from "../../../chocolate-type/common/models/chocolate-type.models";
import LinkModel from "../../../../common/models/link.model";
import PromoModel from "../../../promo/common/models/promo.model";
import ContentDescriptionModel from "./content-description.model";

export default interface ProductLoadedModel {
  id: string;
  chocolateType?: ChocolateTypeModels;
  packType?: PackTypeModel;
  name: LinkModel;
  brand?: BrandModel;
  price: number;
  old_price?: number | null;
  weight: number;
  screen:  string;
  screen_big: string;
  screen_list?: string[];
  description?: string;
  promo?: PromoModel;
  content?: ContentDescriptionModel[];
}
