import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataService} from "../../form-data/common/services/form-data.service";
import {ChocolateTypeService} from "../common/services/chocolate-type.service";
import {AddToolsService} from "../../../admin/common/services/add-tools.service";

@Component({
  selector: 'app-chocolate-type-add',
  templateUrl: './chocolate-type-add.component.html',
  styleUrls: ['./chocolate-type-add.component.scss']
})
export class ChocolateTypeAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
              private formDataService: FormDataService,
              private chocolateTypeService: ChocolateTypeService,
              private addToolsService: AddToolsService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.addForm = this.fb.group({
      name: ''
    });
  }

  submit(): void {
    const data = this.formDataService.formGroupToFormData(this.addForm);
    this.chocolateTypeService.add(data).subscribe( resp => {
      this.addToolsService.apiRequested.next(null);
    });
  }

}
