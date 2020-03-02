import { Component } from '@angular/core';
import {ItemListService} from "../common/services/item-list.service";

@Component({
  selector: 'app-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent {
  constructor(private listService: ItemListService) { }
}
