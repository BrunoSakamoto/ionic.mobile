import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-length',
  templateUrl: './length.page.html',
  styleUrls: ['./length.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class LengthPage {
  inputValue: number | null = null;
  fromUnit: string = 'm';
  toUnit: string = 'km';
  convertedValue: number | null = null;
  unitSymbol: string = 'km';

  unitConversions: { [key: string]: number } = {
    m: 1, // Base (metros)
    km: 0.001,
    mile: 0.000621371,
    cm: 100,
    mm: 1000,
    inch: 39.3701
  };

  convertLength() {
    if (this.inputValue === null) {
      return;
    }

    const valueInMeters = this.inputValue * this.unitConversions[this.fromUnit]; // Converter para metros
    const convertedValue = valueInMeters / this.unitConversions[this.toUnit]; // Converter para unidade desejada

    this.convertedValue = parseFloat(convertedValue.toFixed(4)); // Resultado formatado
    this.updateUnitSymbol();
  }

  updateUnitSymbol() {
    const symbols: { [key: string]: string } = {
      m: 'm', km: 'km', mile: 'mi', cm: 'cm', mm: 'mm', inch: 'in'
    };
    this.unitSymbol = symbols[this.toUnit];
  }
}
