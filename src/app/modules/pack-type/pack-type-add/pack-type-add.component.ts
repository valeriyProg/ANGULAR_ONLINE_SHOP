import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataService} from "../../form-data/common/services/form-data.service";
import {PackTypeService} from "../common/services/pack-type.service";
import {AddToolsService} from "../../../admin/common/services/add-tools.service";

@Component({
  selector: 'app-pack-type-add',
  templateUrl: './pack-type-add.component.html',
  styleUrls: ['./pack-type-add.component.scss']
})
export class PackTypeAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
              private formDataService: FormDataService,
              private packTypeService: PackTypeService,
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
    this.packTypeService.add(data).subscribe( resp => {
      this.addToolsService.apiRequested.next(null);
    });
  }
}
