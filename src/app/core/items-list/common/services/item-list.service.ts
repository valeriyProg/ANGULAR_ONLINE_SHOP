import { Injectable } from '@angular/core';
import SortNavModel from "../models/sort-nav.model";
import {SortTypeEnumMode} from "../enums/sort-type.enum.mode";
import {BehaviorSubject} from "rxjs";
import {DisplayModeEnum} from "../enums/display-mode.enum";

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
      query_params: {
        default: SortTypeEnumMode.ASC
      }
    },
    {
      name: 'Name(A-Z)',
      query_params: {
        product_name: SortTypeEnumMode.ASC
      }
    },
    {
      name: 'Name(Z-A)',
      query_params: {
        product_name: SortTypeEnumMode.DESC
      }
    },
    {
      name: 'Model(A-Z)',
      query_params: {
        product_name: SortTypeEnumMode.ASC
      }
    },
    {
      name: 'Model(Z-A)',
      query_params: {
        product_name: SortTypeEnumMode.DESC
      }
    },
    {
      name: 'Price(Low > High)',
      query_params: {
        product_name: SortTypeEnumMode.ASC
      }
    },
    {
      name: 'Price(High > Low)',
      query_params: {
        product_name: SortTypeEnumMode.DESC
      }
    },
  ];
  selectedFilter: SortNavModel = this.sortNav[0];
  isCountPageListShow = false;
  selectedCountItem: BehaviorSubject<number> = new BehaviorSubject<number>(8);
  isFilterListShow = false;
  filterSelected: BehaviorSubject<null> = new BehaviorSubject<null>(null);

  constructor() { }

  selectFilter(e: Event, filter: SortNavModel) {
    e.preventDefault();
    this.selectedFilter = filter;
    this.isFilterListShow = false;
    this.filterSelected.next(null);
  }

  selectCountPageFilter(e: Event, value: number) {
    e.preventDefault();
    this.isCountPageListShow = false;
    this.selectedCountIndex = value;
    this.selectedCountItem.next(this.itemsCountToShow[value]);
  }
}
