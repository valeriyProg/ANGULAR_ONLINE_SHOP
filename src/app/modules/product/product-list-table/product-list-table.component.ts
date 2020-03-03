import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AddToolsService} from "../../../admin/common/services/add-tools.service";
import ProductContract from "../common/contracts/product.contract";
import ProductFullModel from "../common/models/product-full.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-product-list-table',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list-table.component.scss']
})
export class ProductListTableComponent implements OnInit, OnDestroy {
  productList: ProductFullModel[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id','brand', 'name', 'price', 'weight', 'promo', 'edit', 'delete'];
  dataSource: MatTableDataSource<ProductFullModel>;
  private subscriptions: Subscription[] = [];

  constructor(private productService: ProductContract,
              private addToolsService: AddToolsService) {}

  ngOnInit() {
    this.productService.getList().subscribe(data=> {
      this.productList = data;
      this.dataSource = new MatTableDataSource<ProductFullModel>(this.productList);
      this.dataSource.paginator = this.paginator;
    });

    let requestedSubs = this.addToolsService.apiRequested.subscribe(value => {
      this.productService.getList().subscribe(data=> {
        this.productList = data;
        this.dataSource.data = data;
      });
    });

    this.subscriptions.push(requestedSubs);
  }

  deleteItem(id:string) {
    //TODO: NOT REALIZED YET
    // this.productService.delete(id).subscribe(res => {
    //   this.addToolsService.apiRequested.next(null);
    // });
  }

  applyFilter(e: Event) {
    const filterValue = (e.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.toString().toLowerCase();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    });
  }
}
