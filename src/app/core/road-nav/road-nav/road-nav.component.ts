import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-road-nav',
  templateUrl: './road-nav.component.html',
  styleUrls: ['./road-nav.component.scss']
})
export class RoadNavComponent implements OnInit {
  @Input() selectedCategoryTitle: string;
  constructor() { }

  ngOnInit() {
  }

}
