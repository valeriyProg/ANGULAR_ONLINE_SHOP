import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import BrandModel from "../../brand/common/models/brand.model";
import ChocolateTypeModels from "../../chocolate-type/common/models/chocolate-type.models";
import PackTypeModel from "../../pack-type/common/models/pack-type.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import ProductContract from "../common/contracts/product.contract";
import {BrandService} from "../../brand/common/services/brand.service";
import {PackTypeService} from "../../pack-type/common/services/pack-type.service";
import {ChocolateTypeService} from "../../chocolate-type/common/services/chocolate-type.service";
import {ProductEditService} from "../common/services/product-edit.service";
import {FormDataService} from "../../form-data/common/services/form-data.service";
import {AddToolsService} from "../../../admin/common/services/add-tools.service";
import {PromoService} from "../../promo/common/services/promo.service";
import PromoModel from "../../promo/common/models/promo.model";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit {
  promoList: Observable<PromoModel[]>;
  brands: Observable<BrandModel[]>;
  chocolateType: Observable<ChocolateTypeModels[]>;
  packType: Observable<PackTypeModel[]>;
  addForm: FormGroup;
  screen: string;

  constructor(private productService: ProductContract,
              private brandService: BrandService,
              private promoService: PromoService,
              private packService: PackTypeService,
              private chocolateTypeService: ChocolateTypeService,
              private productEditService: ProductEditService,
              private addToolsService: AddToolsService,
              private fb: FormBuilder,
              private formDataService: FormDataService) { }

  ngOnInit() {
    this.promoList = this.promoService.list();
    this.brands = this.brandService.list();
    this.packType = this.packService.list();
    this.chocolateType = this.chocolateTypeService.list();

    this.initForm();
    this.addToolsService.apiRequested.subscribe(value=> {
      this.promoList = this.promoService.list();
      this.brands = this.brandService.list();
      this.packType = this.packService.list();
      this.chocolateType = this.chocolateTypeService.list();
    });
  }

  initForm () {
    this.addForm = this.fb.group({
      name: '',
      brand_id: undefined,
      chocolateType_id: undefined,
      packType_id: undefined,
      weight: '',
      price: 0,
      old_price: 0,
      screen: null,
      description: '',
      promo_id: undefined
    });
  }

  async selectedImage(e: File) {
    this.addForm.patchValue({
      screen: e
    });
  }

  submit() {
    const data = this.formDataService.formGroupToFormData(this.addForm);
    this.productService.add(data).subscribe(res=> {
      this.addToolsService.apiRequested.next(null);
    });
  }
}

