import SvgIconModel from "../../../ui/svg-icon/common/models/svg-icon.model";
import LinkModel from "../../../common/models/link.model";

export default interface AsideMenuItemModel {
  id: number;
  title: string;
  link: string;
  icon: SvgIconModel;
  submenu?: LinkModel[];
}
