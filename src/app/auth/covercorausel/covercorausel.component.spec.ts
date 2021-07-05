import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CovercorauselComponent } from './covercorausel.component';

describe('CovercorauselComponent', () => {
  let component: CovercorauselComponent;
  let fixture: ComponentFixture<CovercorauselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CovercorauselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CovercorauselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
