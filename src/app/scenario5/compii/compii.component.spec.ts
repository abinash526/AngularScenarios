import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiiComponent } from './compii.component';

describe('CompiiComponent', () => {
  let component: CompiiComponent;
  let fixture: ComponentFixture<CompiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
