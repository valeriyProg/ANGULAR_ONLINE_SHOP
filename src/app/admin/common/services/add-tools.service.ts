import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AddToolsService {
  apiRequested: BehaviorSubject<null> = new BehaviorSubject<null>(null);

  constructor() { }
}
