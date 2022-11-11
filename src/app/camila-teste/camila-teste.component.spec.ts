import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamilaTesteComponent } from './camila-teste.component';

describe('CamilaTesteComponent', () => {
  let component: CamilaTesteComponent;
  let fixture: ComponentFixture<CamilaTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamilaTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamilaTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
