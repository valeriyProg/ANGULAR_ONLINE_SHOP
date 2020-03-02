import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import ChocolateTypeModels from "../common/models/chocolate-type.models";
import {ChocolateTypeService} from "../common/services/chocolate-type.service";
import {AddToolsService} from "../../../admin/common/services/add-tools.service";

@Component({
  selector: 'app-chocolate-type-list',
  templateUrl: './chocolate-type-list.component.html',
  styleUrls: ['./chocolate-type-list.component.scss']
})
export class ChocolateTypeListComponent implements OnInit {
  chocolateTypeList: ChocolateTypeModels[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'value'];
  dataSource: MatTableDataSource<ChocolateTypeModels>;

  constructor(private chocolateTypeService: ChocolateTypeService,
              private addToolsService: AddToolsService) {}

  ngOnInit() {
    this.chocolateTypeService.list().subscribe(data=> {
      this.chocolateTypeList = data;
      this.dataSource = new MatTableDataSource<ChocolateTypeModels>(this.chocolateTypeList);
      this.dataSource.paginator = this.paginator;
    });
    this.addToolsService.apiRequested.subscribe(value => {
      this.chocolateTypeService.list().subscribe(data=> {
        this.chocolateTypeList = data;
        this.dataSource.data = data;
      });
    });
  }

  deleteItem(id:string) {
    this.chocolateTypeService.delete(id).subscribe(res => {
      this.addToolsService.apiRequested.next(null);
    });
  }
}
