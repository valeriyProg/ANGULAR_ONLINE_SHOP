import { Component } from '@angular/core';
import {slideInAnimation} from "../../../ui/animations/common/animation/animation-definition";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class DefaultLayoutComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
