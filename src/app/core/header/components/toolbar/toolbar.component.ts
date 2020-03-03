import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {fromEvent} from 'rxjs';
import {CartService} from "../../../../modules/cart/common/services/cart.service";
import {CalculationService} from "../../../../modules/cart/common/services/calculation.service";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements AfterViewInit {
  @ViewChild('cart_item', { static: false }) cartItem: ElementRef;
  display = false;
  onListHover = false;

  constructor(private cartService: CartService,
              private calculationService: CalculationService) {}

  ngAfterViewInit(): void {
    fromEvent(document, 'click').subscribe( event =>  {
      if (!this.onListHover && this.display) {
        this.display = false;
      }
    });
  }
}
