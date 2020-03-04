import {Injectable} from '@angular/core';
import SortNavModel from "../models/sort-nav.model";
import {SortTypeEnumMode} from "../enums/sort-type.enum.mode";
import {BehaviorSubject} from "rxjs";
import {DisplayModeEnum} from "../enums/display-mode.enum";
import {SortFilterEnum} from "../enums/sort-filter.enum";

@Injectable()
export class ItemListService {
  sortMode = SortTypeEnumMode;
  displayMode = DisplayModeEnum;
  listView = 0;
  itemsCountToShow = [8, 16, 100];
  categoryId: number;
  selectedCountIndex  = 0;
  sortNav: SortNavModel[] = [
    {
      name: 'Default',
      sortFilter: SortFilterEnum.NAME,
      sortType:  SortTypeEnumMode.DESC
    },
    {
      name: 'Name(A-Z)',
      sortFilter: SortFilterEnum.NAME,
      sortType:  SortTypeEnumMode.DESC
    },
    {
      name: 'Name(Z-A)',
      sortFilter: SortFilterEnum.NAME,
      sortType:  SortTypeEnumMode.ASC
    },
    {
      name: 'Size(Small < Large)',
      sortFilter: SortFilterEnum.SIZE,
      sortType:  SortTypeEnumMode.DESC
    },
    {
      name: 'Size(Small > Large)',
      sortFilter: SortFilterEnum.SIZE,
      sortType:  SortTypeEnumMode.ASC
    },
    {
      name: 'Price(High > Low)',
      sortFilter: SortFilterEnum.PRICE,
      sortType:  SortTypeEnumMode.ASC
    },
    {
      name: 'Price(Low > High)',
      sortFilter: SortFilterEnum.PRICE,
      sortType:  SortTypeEnumMode.DESC
    },
  ];
  selectedFilter: SortNavModel = this.sortNav[0];
  isCountPageListShow = false;
  isFilterListShow = false;
  onSelectCountItem: BehaviorSubject<number> = new BehaviorSubject<number>(8);
  onFilterSelect: BehaviorSubject<null> = new BehaviorSubject<null>(null);

  constructor() { }

  selectFilter(e: Event, filter: SortNavModel) {
    e.preventDefault();
    this.selectedFilter = filter;
    this.isFilterListShow = false;
    this.onFilterSelect.next(null);
  }

  selectCountPageFilter(e: Event, value: number) {
    e.preventDefault();
    this.isCountPageListShow = false;
    this.selectedCountIndex = value;
    this.onSelectCountItem.next(this.itemsCountToShow[value]);
  }
}
