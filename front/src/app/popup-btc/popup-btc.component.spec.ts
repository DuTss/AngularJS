import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupBtcComponent } from './popup-btc.component';

describe('PopupBtcComponent', () => {
  let component: PopupBtcComponent;
  let fixture: ComponentFixture<PopupBtcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupBtcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupBtcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
