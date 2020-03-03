import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BrandService} from "../common/services/brand.service";
import {FormDataService} from "../../form-data/common/services/form-data.service";
import {AddToolsService} from "../../../admin/common/services/add-tools.service";

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.scss']
})
export class BrandAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private brandService: BrandService,
              private fb: FormBuilder,
              private formDataService: FormDataService,
              private addToolsService: AddToolsService) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.addForm = this.fb.group({
      name: ''
    });
  }

  submit(): void {
    const data = this.formDataService.formGroupToFormData(this.addForm);
    this.brandService.add(data).subscribe( resp => {
      this.addToolsService.apiRequested.next(null);
    });
  }
}
