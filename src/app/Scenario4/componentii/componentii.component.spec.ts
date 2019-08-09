import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentiiComponent } from './componentii.component';

describe('ComponentiiComponent', () => {
  let component: ComponentiiComponent;
  let fixture: ComponentFixture<ComponentiiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentiiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
