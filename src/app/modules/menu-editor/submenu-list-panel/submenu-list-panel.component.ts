import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuEditorService} from "../common/services/menu-editor.service";
import CategoryMenuItemModel from "../../../core/category-menu/common/models/category-menu-item.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-submenu-list-panel',
  templateUrl: './submenu-list-panel.component.html',
  styleUrls: ['./submenu-list-panel.component.scss']
})
export class SubmenuListPanelComponent implements OnInit, OnDestroy {
  menuData: CategoryMenuItemModel[];
  private subscriptions: Subscription[] = [];

  constructor(private menuEditorService: MenuEditorService) { }

  ngOnInit() {
    let loadedSubs = this.menuEditorService.dataLoaded.subscribe(state=> {
      if (state) {
        this.menuData = this.menuEditorService.menuData;
      }
    });

    this.subscriptions.push(loadedSubs);
  }

  showSubmenuEditForm(e: Event, index:number): void {
    e.preventDefault();
    this.menuEditorService.showSubmenuEditForm(index);
    this.menuEditorService.openSubmenuEditForm.next(true);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    });
  }
}
