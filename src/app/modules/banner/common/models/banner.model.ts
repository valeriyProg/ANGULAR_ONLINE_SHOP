import {BannerTypeEnum} from "../enums/banner-type.enum";

export default interface BannerModel {
  id: string;
  type: BannerTypeEnum,
  title: string;
  screen: string;
  description_title?: string;
  description_content?: string;
  note?: string;
}
