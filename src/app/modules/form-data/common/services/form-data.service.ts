import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable()
export class FormDataService {

  formGroupToFormData(formGroup: FormGroup): FormData {
    const formData = new FormData();

    for (const key in formGroup.value) {

      if (!formGroup.value.hasOwnProperty(key) || !formGroup.value[key]) {
        continue;
      }
      formData.append(key, formGroup.value[key]);
    }
    return formData;
  }
}
