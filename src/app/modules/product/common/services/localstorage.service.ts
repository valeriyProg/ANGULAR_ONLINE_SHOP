import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
  constructor() { }

  set(key, data): void {
    localStorage.setItem(key, JSON.stringify(data));
  }

  delete(key: string): void {
    localStorage.removeItem(key);
  }

  get(key): string {
    return localStorage.getItem(key);
  }
}
