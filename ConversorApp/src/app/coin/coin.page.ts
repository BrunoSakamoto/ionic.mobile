import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CurrencyService } from '../services/currency.service';

@Component({
  selector: 'app-coin',
  templateUrl: './coin.page.html',
  styleUrls: ['./coin.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule] // ✅ Importando módulos do Ionic corretamente
})
export class CoinPage implements OnInit {
  inputValue: number | null = null;
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  convertedValue: number | null = null;
  currencySymbol: string = '€';
  exchangeRates: { [key: string]: number } = {};

  currencySymbols: { [key: string]: string } = {
    'USD': '$',
    'EUR': '€',
    'GBP': '£',
    'BRL': 'R$',
    'JPY': '¥'
  };

  constructor(private currencyService: CurrencyService) {}

  ngOnInit() {
    this.loadExchangeRates();
  }

  loadExchangeRates() {
    this.currencyService.getExchangeRates().subscribe(data => {
      this.exchangeRates = data.conversion_rates;
    }, error => {
      console.error('Erro ao carregar taxas de câmbio', error);
    });
  }

  convertCurrency() {
    if (this.inputValue === null || !this.exchangeRates[this.fromCurrency] || !this.exchangeRates[this.toCurrency]) {
      return;
    }

    const valueInUSD = this.inputValue / this.exchangeRates[this.fromCurrency];
    const convertedValue = valueInUSD * this.exchangeRates[this.toCurrency];

    this.convertedValue = parseFloat(convertedValue.toFixed(2));
    this.currencySymbol = this.currencySymbols[this.toCurrency] || ''; 
  }
}
