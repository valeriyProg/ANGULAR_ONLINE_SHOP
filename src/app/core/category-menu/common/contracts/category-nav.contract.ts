import CategorySubMenuModel from "../models/category-sub-menu.model";
import LinkModel from "../../../../common/models/link.model";
import CategoryMenuItemModel from "../models/category-menu-item.model";

export class CategoryNavigationItem implements CategoryMenuItemModel {
  constructor(
    public id: string,
    public name: LinkModel,
    public icon: string = '',
    public submenu: CategorySubMenuModel[] = []
  ) { }

  addTitleLink(titleLink: LinkModel): void {
    this.name = titleLink;
  }

  addSubMenu(subMenu: CategorySubMenuModel): void {
    this.submenu.push(subMenu);
  }
}
