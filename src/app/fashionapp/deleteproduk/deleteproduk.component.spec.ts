import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteprodukComponent } from './deleteproduk.component';

describe('DeleteprodukComponent', () => {
  let component: DeleteprodukComponent;
  let fixture: ComponentFixture<DeleteprodukComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteprodukComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteprodukComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
