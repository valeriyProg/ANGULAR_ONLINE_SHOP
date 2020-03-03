import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataService} from "../../form-data/common/services/form-data.service";
import {PromoService} from "../common/services/promo.service";

@Component({
  selector: 'app-promo-add',
  templateUrl: './promo-add.component.html',
  styleUrls: ['./promo-add.component.scss']
})
export class PromoAddComponent implements OnInit {
  addForm: FormGroup;

  constructor(private fb: FormBuilder,
              private formDataService: FormDataService,
              private promoTypeService: PromoService) { }

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
    this.promoTypeService.add(data).subscribe( resp => {});
  }
}
