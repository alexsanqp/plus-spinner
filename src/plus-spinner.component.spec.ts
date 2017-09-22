import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusSpinnerComponent } from './plus-spinner.component';

describe('PlusSpinnerComponent', () => {
  let component: PlusSpinnerComponent;
  let fixture: ComponentFixture<PlusSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
