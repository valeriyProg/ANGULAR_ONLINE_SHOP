import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import BrandModel from "../../brand/common/models/brand.model";
import ProductFullModel from "../common/models/product-full.model";
import PackTypeModel from "../../pack-type/common/models/pack-type.model";
import ChocolateTypeModels from "../../chocolate-type/common/models/chocolate-type.models";
import ProductContract from "../common/contracts/product.contract";
import {BrandService} from "../../brand/common/services/brand.service";
import {PackTypeService} from "../../pack-type/common/services/pack-type.service";
import {ChocolateTypeService} from "../../chocolate-type/common/services/chocolate-type.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ProductEditService} from "../common/services/product-edit.service";
import {FormDataService} from "../../form-data/common/services/form-data.service";
import PromoModel from "../../promo/common/models/promo.model";
import {PromoService} from "../../promo/common/services/promo.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  product: Observable<ProductFullModel>;
  productId: string;
  promoList: Observable<PromoModel[]>;
  brands: Observable<BrandModel[]>;
  chocolateType: Observable<ChocolateTypeModels[]>;
  packType: Observable<PackTypeModel[]>;
  editForm: FormGroup;
  screen: string;

  @Output() edited = new EventEmitter();

  constructor(private productService: ProductContract,
              private brandService: BrandService,
              private promoService: PromoService,
              private packService: PackTypeService,
              private chocolateTypeService: ChocolateTypeService,
              private productEditService: ProductEditService,
              private fb: FormBuilder,
              private formDataService: FormDataService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(value =>  {
      this.productId = value.get('id');
      this.initForm(this.productId);
    });

    this.editForm = this.fb.group({
      name: '',
      brand_id: undefined,
      chocolateType_id: undefined,
      packType_id: undefined,
      weight: 0,
      price: 0,
      old_price: 0,
      screen: null,
      promo_id: undefined,
      description: ''
    });
  }

  initForm (id: string) {
    this.product = this.productService.get(id);
    this.promoList = this.promoService.list();
    this.brands = this.brandService.list();
    this.packType = this.packService.list();
    this.chocolateType = this.chocolateTypeService.list();

    this.productId = id;
    this.product.subscribe(data => {
      this.editForm.patchValue({
        name: data.name.title,
        weight: data.weight,
        price: data.price,
        old_price: data.old_price,
        description: data.description
      });

      data.promo.subscribe(banner => {
        this.editForm.patchValue({
          promo_id: banner.id
        });
      });

      data.brand.subscribe(brand => {
        this.editForm.patchValue({
          brand_id: brand.id
        });
      });

      data.packType.subscribe(pack => {
        this.editForm.patchValue({
          packType_id: pack.id
        });
      });

      data.chocolateType.subscribe(chocolate => {
        this.editForm.patchValue({
          chocolateType_id: chocolate.id
        });
      });
      this.screen = data.screen;
      this.productEditService.selectedProduct.next(this.productId);
    });
  }

  async selectedImage(e: File) {
    this.editForm.patchValue({
      screen: e
    });
  }

  submit() {
    const data = this.formDataService.formGroupToFormData(this.editForm);
    const result = this.productService.update(this.productId, data).subscribe(res=> {
      this.productEditService.selectedProduct.next(this.productId);
    });
  }
}
