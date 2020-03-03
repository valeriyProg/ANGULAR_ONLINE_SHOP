import {SortFilterEnum} from "../enums/sort-filter.enum";
import {SortTypeEnumMode} from "../enums/sort-type.enum.mode";

export default interface SortNavModel {
  name: string;
  sortFilter: SortFilterEnum;
  sortType: SortTypeEnumMode;
}
