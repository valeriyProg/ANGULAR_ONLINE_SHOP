import { Injectable } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Injectable()
export class FormDataService {

  formGroupToFormData(formGroup: FormGroup): FormData {
    return this.objectToFormsData(formGroup.value);
  }

  objectToFormsData(input: {[k: string]: string | Blob}): FormData {
    const formData = new FormData();

    for (const key in input) {
      if (!input.hasOwnProperty(key) || !input[key]) {
        continue;
      }

      formData.append(key, input[key]);
    }

    return formData;
  }

  formGroupToObject(formGroup: FormGroup): {[key:string]:string | Blob | {[key:string]: string | number}} {
    let obj = {};
    for(let key in formGroup.controls) {
      if (!formGroup.controls.hasOwnProperty(key) || !formGroup.controls[key]) {
        continue;
      }
      obj[key] = formGroup.controls[key].value;
    }
    return obj;
  }
}
