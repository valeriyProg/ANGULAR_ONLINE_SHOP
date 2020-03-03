import { Component } from '@angular/core';
import {CartService} from "../common/services/cart.service";
import {CalculationService} from "../common/services/calculation.service";

@Component({
  selector: 'app-calculation-table',
  templateUrl: './calculation-table.component.html',
  styleUrls: ['./calculation-table.component.scss']
})
export class CalculationTableComponent  {

  constructor(private cartService: CartService,
              private calculationService: CalculationService) { }

}
