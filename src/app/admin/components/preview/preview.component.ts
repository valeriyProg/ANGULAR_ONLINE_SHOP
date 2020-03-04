import {Component, Input} from '@angular/core';
import {CategoryMenuService} from "../../../core/category-menu/common/services/category-menu.service";
import {ProductEditService} from "../../../modules/product/common/services/product-edit.service";

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent  {
  @Input() productId: string;
  constructor(private categoryService: CategoryMenuService,
              private productEditService: ProductEditService) { }

  upload():void {
    this.categoryService.onUploadList.next(true);
    if(this.productId) {
      this.productEditService.onSelectedProduct.next(this.productId);
    }
  }
}
