import {Component} from '@angular/core';
import {AsideBarService} from "../../common/services/aside-bar.service";

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss']
})
export class AdminHeaderComponent {
  constructor(private asideBarService: AsideBarService) { }
}
