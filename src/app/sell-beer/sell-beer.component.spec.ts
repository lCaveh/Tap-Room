import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellBeerComponent } from './sell-beer.component';

describe('SellBeerComponent', () => {
  let component: SellBeerComponent;
  let fixture: ComponentFixture<SellBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
