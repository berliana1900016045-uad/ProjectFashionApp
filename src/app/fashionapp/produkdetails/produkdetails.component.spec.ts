import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdukdetailsComponent } from './produkdetails.component';

describe('ProdukdetailsComponent', () => {
  let component: ProdukdetailsComponent;
  let fixture: ComponentFixture<ProdukdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdukdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdukdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
