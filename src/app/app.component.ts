import { Component } from '@angular/core';
import {ItemListService} from "./core/items-list/common/services/item-list.service";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Shop';

  constructor(private listService: ItemListService) { }

  ngOnInit(): void {
    fromEvent(document, 'click').subscribe( event =>  {
      if (!this.listService.onListHover && this.listService.isFilterListShow ) {
        this.listService.isFilterListShow = false;
      }
      if (!this.listService.onListHover && this.listService.isCountPageListShow) {
        this.listService.isCountPageListShow = false;
      }
    });
  }
}
