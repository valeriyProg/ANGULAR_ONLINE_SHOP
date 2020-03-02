import {Component, OnInit, ViewChild} from '@angular/core';
import {AddToolsService} from "../../../admin/common/services/add-tools.service";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {PackTypeService} from "../common/services/pack-type.service";
import PackTypeModel from "../common/models/pack-type.model";

@Component({
  selector: 'app-pack-type-list',
  templateUrl: './pack-type-list.component.html',
  styleUrls: ['./pack-type-list.component.scss']
})
export class PackTypeListComponent implements OnInit {
  packTypeList: PackTypeModel[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'value'];
  dataSource: MatTableDataSource<PackTypeModel>;

  constructor(private packTypeService: PackTypeService,
              private addToolsService: AddToolsService) {}

  ngOnInit() {
    this.packTypeService.list().subscribe(data=> {
      this.packTypeList = data;
      this.dataSource = new MatTableDataSource<PackTypeModel>(this.packTypeList);
      this.dataSource.paginator = this.paginator;
    });

    this.addToolsService.apiRequested.subscribe(value => {
      this.packTypeService.list().subscribe(data=> {
        this.packTypeList = data;
        this.dataSource.data = data;
      });
    });
  }

  deleteItem(id:string) {
    this.packTypeService.delete(id).subscribe(res => {
      this.addToolsService.apiRequested.next(null);
    });
  }
}
