import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsidetailComponent } from './isidetail.component';

describe('IsidetailComponent', () => {
  let component: IsidetailComponent;
  let fixture: ComponentFixture<IsidetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsidetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IsidetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
