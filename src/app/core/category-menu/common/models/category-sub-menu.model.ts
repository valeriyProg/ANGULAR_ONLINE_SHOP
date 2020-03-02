import {CategoryTypeEnum} from "../enums/category-type.enum";
import LinkModel from "../../../../common/models/link.model";

export default interface CategorySubMenuModel {
  categoryId: string;
  type: CategoryTypeEnum | string;
  title?: LinkModel;
  items: LinkModel[];
  icon?: string;
}
