import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionWiseComponent } from './function-wise.component';

describe('FunctionWiseComponent', () => {
  let component: FunctionWiseComponent;
  let fixture: ComponentFixture<FunctionWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
