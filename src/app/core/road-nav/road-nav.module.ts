import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoadNavComponent } from './road-nav/road-nav.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    RoadNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RoadNavComponent
  ]
})
export class RoadNavModule { }
