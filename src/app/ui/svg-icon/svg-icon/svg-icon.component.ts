import {Component, Input, OnInit} from '@angular/core';
import SvgIconModel from "../common/models/svg-icon.model";

@Component({
  selector: 'app-svg-icon',
  templateUrl: './svg-icon.component.html',
  styleUrls: ['./svg-icon.component.scss']
})
export class SvgIconComponent implements OnInit {
  @Input() svgConfig: SvgIconModel;

  constructor() { }

  ngOnInit() {
  }

}
