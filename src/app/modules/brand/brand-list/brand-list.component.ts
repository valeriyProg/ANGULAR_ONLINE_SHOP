import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import BrandModel from "../common/models/brand.model";
import {BrandService} from "../common/services/brand.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {AddToolsService} from "../../../admin/common/services/add-tools.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit, OnDestroy {
  brandList: BrandModel[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'value'];
  dataSource: MatTableDataSource<BrandModel>;
  private subscriptions: Subscription[] = [];

  constructor(private brandService: BrandService, private addToolsService: AddToolsService) { }

  ngOnInit() {
    this.brandService.list().subscribe(data=> {
      this.brandList = data;
      this.dataSource = new MatTableDataSource<BrandModel>(this.brandList);
      this.dataSource.paginator = this.paginator;
    });

    let requestedSubs = this.addToolsService.apiRequested.subscribe(value => {
      this.brandService.list().subscribe(data=> {
        this.brandList = data;
        this.dataSource.data = data;
        // this.dataSource.paginator = this.paginator;
      });
    });

    this.subscriptions.push(requestedSubs);
  }

  deleteItem(id:string) {
    this.brandService.delete(id).subscribe(res => {
      this.addToolsService.apiRequested.next(null);
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(value => {
      value.unsubscribe();
    });
  }
}





















