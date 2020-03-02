//TODO: NOT USING. TO DELETE IN FUTURE
import {Promo} from "../enums/promo.enum";
import LinkModel from "../../../../common/models/link.model";

export default interface ProductSmallModel {
  id: string;
  name: LinkModel;
  brand: string;
  price: number;
  weight: number;
  screen: string;
  promo: Promo;
}
