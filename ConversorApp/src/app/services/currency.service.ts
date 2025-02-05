import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private apiKey: string = 'bc7241c643e26f9b2eb819ba'; // 🔹 Substitua pela sua chave da API
  private apiUrl: string = `https://v6.exchangerate-api.com/v6/${this.apiKey}/latest/USD`;

  constructor(private http: HttpClient) {}

  getExchangeRates(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
