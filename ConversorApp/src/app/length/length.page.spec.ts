import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LengthPage } from './length.page';

describe('LengthPage', () => {
  let component: LengthPage;
  let fixture: ComponentFixture<LengthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
