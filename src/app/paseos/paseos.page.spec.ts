import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaseosPage } from './paseos.page';

describe('PaseosPage', () => {
  let component: PaseosPage;
  let fixture: ComponentFixture<PaseosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaseosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaseosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
