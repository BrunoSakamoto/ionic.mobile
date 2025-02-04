import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.page.html',
  styleUrls: ['./coin.page.scss'],
  standalone: true, // Continua sendo standalone
  imports: [IonicModule, CommonModule, FormsModule],
})
export class CoinPage {
  value: number = 0;
  convertedValue: number | null = null;
  currencies = [
    { name: 'Dólar Americano', code: 'USD', rate: 0.19, symbol: '$' },
    { name: 'Euro', code: 'EUR', rate: 0.17, symbol: '€' },
    { name: 'Libra Esterlina', code: 'GBP', rate: 0.15, symbol: '£' },
    { name: 'Iene Japonês', code: 'JPY', rate: 25.65, symbol: '¥' },
    { name: 'Peso Argentino', code: 'ARS', rate: 40.0, symbol: '$' },
  ];
  selectedCurrencyRate: number = 0;
  selectedCurrencySymbol: string = '';

  convertCurrency(): void {
    if (this.selectedCurrencyRate <= 0) {
      console.error('Selecione uma moeda válida!');
      this.convertedValue = null;
      return;
    }
    this.convertedValue = this.value * this.selectedCurrencyRate;
  }

  onCurrencyChange(currency: { rate: number; symbol: string }): void {
    this.selectedCurrencyRate = currency.rate;
    this.selectedCurrencySymbol = currency.symbol;
  }
}
