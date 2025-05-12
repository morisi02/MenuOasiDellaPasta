import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Pietanza } from '../models/pietanza.interface';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private jsonUrl = 'assets/piatti.json'; // ✅ Percorso corretto

  constructor(private http: HttpClient) {}

  getPrimiPiatti(): Observable<Pietanza[]> {
    return this.http.get<{ Primi: Pietanza[] }>(this.jsonUrl).pipe(
      map(data => data.Primi) // ✅ Estrae solo i primi piatti
    );
  }
}
