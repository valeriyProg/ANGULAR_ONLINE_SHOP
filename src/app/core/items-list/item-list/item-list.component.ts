import {Component, OnDestroy, OnInit} from '@angular/core';
import ProductContract from "../../../modules/product/common/contracts/product.contract";
import ProductFullModel from "../../../modules/product/common/models/product-full.model";
import {DisplayModeEnum} from "../common/enums/display-mode.enum";
import {SizeModeEnum} from "../../../modules/product/common/enums/size-mode.enum";
import {ActivatedRoute} from "@angular/router";
import {ItemListService} from "../common/services/item-list.service";
import CategoryDataModel from "../../../modules/category/common/models/category-data.model";
import {HttpClient} from "@angular/common/http";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit, OnDestroy {
  categoryId: string | number;
  data: ProductFullModel[];
  displayMode = DisplayModeEnum;
  sizeMode = SizeModeEnum;
  params: { [key: string]: string | number } = {};
  isDataLoading = false;
  private subscriptions: Subscription[] = [];

  constructor(private productService: ProductContract,
              private activatedRoute: ActivatedRoute,
              private itemListService: ItemListService,
              private http: HttpClient) { }

  ngOnInit() {
    this.activatedRoute.queryParamMap.subscribe(value => {
        this.categoryId = value.get('category') || 0;

        this.http.get<CategoryDataModel>(`http://localhost:3000/category/${this.categoryId}`).subscribe( info=> {
          const index = this.itemListService.selectedCountIndex;
          this.params = {};
          this.params = Object.assign(this.params, { count: this.itemListService.itemsCountToShow[index]});
          this.params = Object.assign(this.params, info.filter);

          this.productService.getList(this.params).subscribe(items => {
            this.data = items;

            let filterSubs = this.itemListService.onFilterSelect.subscribe(value => {
              this.isDataLoading = true;
              this.loadProductList();
            });


            let countSubs = this.itemListService.onSelectCountItem.subscribe(value => {
              this.isDataLoading = true;
              this.params.count = value;
              this.loadProductList();
            });

            this.subscriptions.push(filterSubs);
            this.subscriptions.push(countSubs);
          });
        });
      }
    );
  }

  private loadProductList() {
    this.productService.getList(this.params).subscribe(data => {
      // SIMULATE DELAY FOR DISPLAY SPINNER
      setTimeout( () => {
        this.data = data;
        this.isDataLoading = false;
      }, 600 );
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    });
  }
}
