import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompiiiComponent } from './compiii.component';

describe('CompiiiComponent', () => {
  let component: CompiiiComponent;
  let fixture: ComponentFixture<CompiiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompiiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompiiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
