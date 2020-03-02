import { Pipe, PipeTransform } from '@angular/core';
import CategoryDataModel from "../models/category-data.model";

@Pipe({
  name: 'categorySort'
})
export class CategorySortPipe implements PipeTransform {

  transform(value: CategoryDataModel[], filter: string): any {
    if (value) {
      return value.filter(item => item.page && item.page === filter);
    }
  }

}
