import { Component } from '@angular/core';
import {AsideBarService} from "../../common/services/aside-bar.service";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {
  constructor(private asideBarService: AsideBarService) { }
}
