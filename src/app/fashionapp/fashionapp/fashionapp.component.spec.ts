import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FashionappComponent } from './fashionapp.component';

describe('FashionappComponent', () => {
  let component: FashionappComponent;
  let fixture: ComponentFixture<FashionappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FashionappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FashionappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
