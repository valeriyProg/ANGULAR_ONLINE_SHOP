import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'serverImage'
})
export class ServerImagePipe implements PipeTransform {
  transform(value: string): string {
    return `http://localhost:3000/img/${value}`;
  }
}
