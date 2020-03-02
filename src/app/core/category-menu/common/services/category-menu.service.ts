import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import CategoryMenuItemModel from "../models/category-menu-item.model";

@Injectable()
export class CategoryMenuService {
  uploadListSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getMenu(): Observable<CategoryMenuItemModel[]> {
    return this.http.get<CategoryMenuItemModel[]>('http://localhost:3000/menu/get-category-menu-list');
  }

  addItems(data:CategoryMenuItemModel[]): Observable<any>{
    return this.http.post<any>('http://localhost:3000/menu/add-category-list', data);
  }

  addItem(data:CategoryMenuItemModel): Observable<any>{
    return this.http.post<any>('http://localhost:3000/menu/add-category', data);
  }

  uploadMenu(): void {
    this.uploadListSubject.next(true);
  }

  updateList<R>(data:CategoryMenuItemModel[]): Observable<HttpEvent<R>> {
    const url = 'http://localhost:3000/menu/add-category-list';
    const req = new HttpRequest('POST', url, data, {
      reportProgress: true,
    });
    return this.http.request(req);
  }

}
