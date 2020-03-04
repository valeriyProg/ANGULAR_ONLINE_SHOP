import { Component } from '@angular/core';
import {AsideBarService} from "../../common/services/aside-bar.service";
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "../../../ui/animations/common/animation/animation-definition";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class DefaultLayoutComponent {

  constructor(private asideBarService: AsideBarService) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
