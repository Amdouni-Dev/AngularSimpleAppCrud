import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowShoppingComponentComponent } from './show-shopping-component.component';

describe('ShowShoppingComponentComponent', () => {
  let component: ShowShoppingComponentComponent;
  let fixture: ComponentFixture<ShowShoppingComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowShoppingComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowShoppingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
