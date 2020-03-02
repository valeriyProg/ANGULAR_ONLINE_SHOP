import LinkModel from "../../../../common/models/link.model";

export default interface ProductModel {
  id: string;
  chocolateType_id: string;
  packType_id: string;
  name: LinkModel;
  brand_id: string;
  price: number;
  old_price?: number | null;
  weight: number;
  screen:  string;
  screen_big?: string;
  screen_list?: string[];
  description?: string;
  promo_id?: string;
  content_id?: string;
}
