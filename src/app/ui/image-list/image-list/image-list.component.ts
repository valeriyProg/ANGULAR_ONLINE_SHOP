import {AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild} from '@angular/core';
import {DisplayModeEnum} from "../../../core/items-list/common/enums/display-mode.enum";

@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.scss']
})
export class ImageListComponent implements AfterViewInit {
  @Input() images: string[];
  @Output() selectedImage: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('list', { static: false }) list: ElementRef;
  displayMode = DisplayModeEnum;
  target: HTMLElement;
  listElement: HTMLElement;
  listElemHeight: number;
  selectedItemIndex: number = 0;

  ngAfterViewInit(): void {
    this.target = this.list.nativeElement as HTMLElement;
    this.listElement = this.target.children[0] as HTMLElement;
  }

  prev() {
    if (this.target.scrollTop > 0) {
      this.listElemHeight = this.listElement.offsetHeight;
      this.target.scrollTop -= this.listElemHeight;
    }
  }

  next() {
    this.listElemHeight = this.listElement.offsetHeight;
    if ( (this.target.scrollTop + this.target.clientHeight) <  this.target.scrollHeight) {
      this.target.scrollTop += this.listElemHeight;
    }
  }
}
