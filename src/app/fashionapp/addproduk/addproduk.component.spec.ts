import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprodukComponent } from './addproduk.component';

describe('AddprodukComponent', () => {
  let component: AddprodukComponent;
  let fixture: ComponentFixture<AddprodukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprodukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprodukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
