import {Component, Input, OnInit} from '@angular/core';
import {ContentDescriptionService} from "../common/services/content-description.service";
import ContentDescriptionModel from "../common/models/content-description.model";
import {Observable} from "rxjs";
import {DomSanitizer} from "@angular/platform-browser";
import {FormBuilder, FormGroup} from "@angular/forms";
import {FormDataService} from "../../form-data/common/services/form-data.service";

@Component({
  selector: 'app-product-detail-description',
  templateUrl: './product-detail-description.component.html',
  styleUrls: ['./product-detail-description.component.scss']
})
export class ProductDetailDescriptionComponent implements OnInit {
  selectedTabIndex = 0;
  @Input() descriptionObservable: Observable<ContentDescriptionModel>;
  description: ContentDescriptionModel;
  reviewForm: FormGroup;
  loading: boolean = false;

  constructor(private contentDescriptionService: ContentDescriptionService,
              private sanitizer: DomSanitizer,
              private fb: FormBuilder,
              private formDataService: FormDataService) { }

  ngOnInit() {
    this.descriptionObservable.subscribe(value => {
      this.description = value;
      this.initForm();
    });
  }

  private initForm() {
    this.reviewForm = this.fb.group({
      id: this.description.id,
      name: '',
      review_text: '',
      rate: '5'
    });
  }

  getVideoUrl(link: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(link);
  }

  toggleForm(review_form_wrapper: HTMLElement) {
    const expanded = review_form_wrapper.classList.contains('expanded');
    if (expanded) {
      review_form_wrapper.classList.remove('expanded');
      review_form_wrapper.classList.add('hide');
      return;
    }
    review_form_wrapper.classList.remove('expanded');
    review_form_wrapper.classList.add('expanded');
  }

  addReview() {
    this.loading = true;
    const data = this.formDataService.formGroupToFormData(this.reviewForm);
    this.contentDescriptionService.add(data).subscribe();

    this.descriptionObservable.subscribe(value => {
      this.description = value;
      this.initForm();
      setTimeout(() => {
        this.loading = false;
      }, 600);
    });
  }
}
