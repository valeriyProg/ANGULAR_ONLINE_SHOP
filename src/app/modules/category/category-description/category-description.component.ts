import {Component, Input} from '@angular/core';
import CategoryDataModel from "../common/models/category-data.model";

@Component({
  selector: 'app-category-description',
  templateUrl: './category-description.component.html',
  styleUrls: ['./category-description.component.scss']
})
export class CategoryDescriptionComponent {
  @Input() categoryData: CategoryDataModel;
}
