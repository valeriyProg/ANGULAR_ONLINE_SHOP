import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-road-nav',
  templateUrl: './road-nav.component.html',
  styleUrls: ['./road-nav.component.scss']
})
export class RoadNavComponent {
  @Input() selectedCategoryTitle: string;
}
