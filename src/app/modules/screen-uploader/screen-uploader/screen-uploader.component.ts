import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ImageService} from "../../image/common/services/image.service";
import {defaultImage} from "../common/constant/default-image.constant";

@Component({
  selector: 'app-screen-uploader',
  templateUrl: './screen-uploader.component.html',
  styleUrls: ['./screen-uploader.component.scss']
})
export class ScreenUploaderComponent {
  @Input() value: string;
  defaultImage = defaultImage;
  selectedImage = '';
  @Output() selectImage = new EventEmitter<File>();

  constructor(private imageService: ImageService) { }

  async changeFile(e: Event) {
    const target = e.target as HTMLInputElement;
    const image = target.files.item(0);
    this.selectedImage = await this.imageService.toBase64(image);
    this.selectImage.emit(image);
  }
}
