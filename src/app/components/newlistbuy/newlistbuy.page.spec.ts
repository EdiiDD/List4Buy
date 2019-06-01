import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewlistbuyPage } from './newlistbuy.page';

describe('NewlistbuyPage', () => {
  let component: NewlistbuyPage;
  let fixture: ComponentFixture<NewlistbuyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewlistbuyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewlistbuyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
