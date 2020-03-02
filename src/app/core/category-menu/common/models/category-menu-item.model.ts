import CategorySubMenuModel from "./category-sub-menu.model";
import LinkModel from "../../../../common/models/link.model";

export default interface CategoryMenuItemModel {
  id: string;
  name: LinkModel;
  icon: string;
  submenu: CategorySubMenuModel[];
}

