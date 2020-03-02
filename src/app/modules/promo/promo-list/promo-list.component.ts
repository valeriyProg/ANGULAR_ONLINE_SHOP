import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {AddToolsService} from "../../../admin/common/services/add-tools.service";
import PromoModel from "../common/models/promo.model";
import {PromoService} from "../common/services/promo.service";

@Component({
  selector: 'app-promo-list',
  templateUrl: './promo-list.component.html',
  styleUrls: ['./promo-list.component.scss']
})
export class PromoListComponent implements OnInit {
  bannerList: PromoModel[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'value'];
  dataSource: MatTableDataSource<PromoModel>;

  constructor(private promoService: PromoService,
              private addToolsService: AddToolsService) {}

  ngOnInit() {
    this.promoService.list().subscribe(data=> {
      this.bannerList = data;
      this.dataSource = new MatTableDataSource<PromoModel>(this.bannerList);
      this.dataSource.paginator = this.paginator;
    });
    this.addToolsService.apiRequested.subscribe(value => {
      this.promoService.list().subscribe(data=> {
        this.bannerList = data;
        this.dataSource.data = data;
      });
    });
  }

  deleteItem(id:string) {
    this.promoService.delete(id).subscribe(res => {
      this.addToolsService.apiRequested.next(null);
    });
  }
}
