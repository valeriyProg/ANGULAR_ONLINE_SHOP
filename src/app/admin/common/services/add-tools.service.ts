import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class AddToolsService {
  onApiRequested: BehaviorSubject<null> = new BehaviorSubject<null>(null);
}
