import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlWiseComponent } from './control-wise.component';

describe('ControlWiseComponent', () => {
  let component: ControlWiseComponent;
  let fixture: ComponentFixture<ControlWiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlWiseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
