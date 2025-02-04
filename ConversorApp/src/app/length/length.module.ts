import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LengthPageRoutingModule } from './length-routing.module';

import { LengthPage } from './length.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LengthPageRoutingModule,
    LengthPage
  ],
})
export class LengthPageModule {}
