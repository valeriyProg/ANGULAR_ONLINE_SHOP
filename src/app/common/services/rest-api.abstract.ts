import {HttpClient} from "@angular/common/http";
import {Observable } from "rxjs";

export default abstract class RestApiAbstract<ElementType> {
  protected abstract readonly http: HttpClient;
  protected abstract readonly path: string;
  private readonly prefix: string = 'http://localhost:3000';

  list(params?: {}): Observable<ElementType[]> {
    return this.http.get<ElementType[]>(`${this.prefix}/${this.path}`, params);
  }

  get(id: string): Observable<ElementType> {
    return this.http.get<ElementType>(`${this.prefix}/${this.path}/${id}`);
  }

  add(data: FormData | ElementType): Observable<void> {
    return this.http.post<void>(`${this.prefix}/${this.path}`, data);
  }

  addList(data: ElementType[]): Observable<void> {
    return this.http.post<void>(`${this.prefix}/${this.path}`, data);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.prefix}/${this.path}/${id}`);
  }
}
