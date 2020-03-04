import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CategoryService} from "../common/services/category.service";
import {ImageService} from "../../image/common/services/image.service";
import PackTypeModel from "../../pack-type/common/models/pack-type.model";
import ChocolateTypeModels from "../../chocolate-type/common/models/chocolate-type.models";
import {Observable} from "rxjs";
import {PackTypeService} from "../../pack-type/common/services/pack-type.service";
import {ChocolateTypeService} from "../../chocolate-type/common/services/chocolate-type.service";
import {FormDataService} from "../../form-data/common/services/form-data.service";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  addForm: FormGroup;
  packType: Observable<PackTypeModel[]>;
  chocolateType: Observable<ChocolateTypeModels[]>;
  @Output() categoryAdded: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private categoryService: CategoryService,
              private imageService: ImageService,
              private packService: PackTypeService,
              private chocolateTypeService: ChocolateTypeService,
              private formDataService: FormDataService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.packType = this.packService.list();
    this.chocolateType = this.chocolateTypeService.list();

    this.initForm();
  }

  private initForm() {
    this.addForm = this.fb.group({
      name: '',
      screen: null,
      description: '',
      chocolateType_id: -1,
      packType_id: -1,
      page: undefined
    });
  }

   submit() {
    let data = this.formDataService.formGroupToObject(this.addForm);
     // this.categoryService.add(data).subscribe(res=> { });

     this.prepareData(data).then(value => {
      this.categoryService.add(data).subscribe(res=> { });
      this.initForm();
    });
  }

  async selectedImage($event: File) {
    this.addForm.patchValue({
      screen: $event
    });
  }

  async prepareData(data: any) {
    if (data['chocolateType_id'] >=0 || data['packType_id'] >=0) {
      let filter = {};
      if (data['chocolateType_id'] >=0) {
        filter['chocolateType_id'] = [data['chocolateType_id']];
      }
      if (data['packType_id'] >=0) {
        filter['packType_id'] = [data['chocolateType_id']];
      }
      data['filter'] =  filter;
    }
    // data['screen'] = await this.imageService.toBase64(data['screen']);
    delete data['chocolateType_id'];
    delete data['packType_id'];
  }
}
