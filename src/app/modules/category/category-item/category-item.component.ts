import {Component, Input, OnInit} from '@angular/core';
import CategoryDataModel from "../common/models/category-data.model";

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent implements OnInit {
  @Input() categoryItem: CategoryDataModel;

  ngOnInit(): void {

  }
}
