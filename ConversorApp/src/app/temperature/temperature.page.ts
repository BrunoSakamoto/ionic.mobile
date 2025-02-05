import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.page.html',
  styleUrls: ['./temperature.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class TemperaturePage {
  inputValue: number | null = null;
  fromUnit: string = 'C';
  toUnit: string = 'F';
  convertedValue: number | null = null;
  unitSymbol: string = '°F';

  convertTemperature() {
    if (this.inputValue === null) {
      return;
    }

    let result: number | null = null;
    const value = this.inputValue;

    if (this.fromUnit === this.toUnit) {
      result = value;
    } else {
      switch (this.fromUnit) {
        case 'C':
          result = this.toUnit === 'F' ? value * 9/5 + 32 : value + 273.15;
          break;
        case 'F':
          result = this.toUnit === 'C' ? (value - 32) * 5/9 : (value - 32) * 5/9 + 273.15;
          break;
        case 'K':
          result = this.toUnit === 'C' ? value - 273.15 : (value - 273.15) * 9/5 + 32;
          break;
      }
    }

    this.convertedValue = result !== null ? parseFloat(result.toFixed(2)) : null;
    this.updateUnitSymbol();
  }

  updateUnitSymbol() {
    const symbols: { [key: string]: string } = { 'C': '°C', 'F': '°F', 'K': 'K' };
    this.unitSymbol = symbols[this.toUnit];
  }
}
