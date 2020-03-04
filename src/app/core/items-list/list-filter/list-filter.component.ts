import {Component, OnInit} from '@angular/core';
import {ItemListService} from "../common/services/item-list.service";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent implements OnInit{
  onListHover: boolean;

  constructor(private listService: ItemListService) { }

  ngOnInit(): void {
    fromEvent(document, 'click').subscribe( event =>  {
      if (!this.onListHover && this.listService.isFilterListShow ) {
        this.listService.isFilterListShow = false;
      }
      if (!this.onListHover && this.listService.isCountPageListShow) {
        this.listService.isCountPageListShow = false;
      }
    });
  }
}
