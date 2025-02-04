import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoinPage } from './coin.page';

describe('CoinPage', () => {
  let component: CoinPage;
  let fixture: ComponentFixture<CoinPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
