import {Component} from '@angular/core';
import {AsideBarService} from "../../common/services/aside-bar.service";

@Component({
  selector: 'app-aside-bar',
  templateUrl: './aside-bar.component.html',
  styleUrls: ['./aside-bar.component.scss']
})
export class AsideBarComponent {
  constructor(private asideBarService: AsideBarService) { }
}
