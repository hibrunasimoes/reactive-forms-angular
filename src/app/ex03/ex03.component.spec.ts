import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex03Component } from './ex03.component';

describe('Ex03Component', () => {
  let component: Ex03Component;
  let fixture: ComponentFixture<Ex03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ex03Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
