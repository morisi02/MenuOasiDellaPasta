import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pietanza } from '../models/pietanza.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getMenu(): Observable<{ Primi: Pietanza[], Secondi: Pietanza[] }> {
    return this.http.get<{ Primi: Pietanza[], Secondi: Pietanza[] }>(this.jsonUrl);
  }
}
